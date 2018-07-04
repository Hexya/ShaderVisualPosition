export default class SignupModal {
    constructor() {

        this.registerDOM();
        this.registerEvents();

    }

    registerDOM() {
        //Dom Elements
        this.elts = {};
        this.elts.modal = document.querySelector('.modal-signup');
        this.elts.closeBtn = this.elts.modal.querySelector('.close');
        this.elts.body = this.elts.modal.querySelector('.modal-body');
        this.elts.overlay = this.elts.modal.querySelector('.modal-overlay');
        this.elts.submitBtn = this.elts.modal.querySelector('.submit-btn');
        this.elts.signupInput = this.elts.modal.querySelector('.signup-input');
        this.elts.passwordInput = this.elts.modal.querySelector('.password-input');
        this.elts.fileInput = this.elts.modal.querySelector('.file-input');
        this.elts.modalContent = this.elts.modal.querySelector('.modal-content');

        this.elts.modalSuccess = document.querySelector('.modal-success');
        this.elts.modalContentSuccess = this.elts.modalSuccess.querySelector('.modal-content');
    }

    registerEvents() {
        this.onResponse = this.onResponse.bind(this)
        this.elts.closeBtn.addEventListener('click', this.onCloseBtnClick.bind(this));
        this.elts.overlay.addEventListener('click', this.onOverlayClick.bind(this));
        this.elts.submitBtn.addEventListener('click', this.onSubmitBtnClick.bind(this));
    }

    open() {
        this.elts.modal.classList.add('active');
    }

    close() {
        this.elts.modalContent.classList.add('closeModal')
        setTimeout(() => {
            this.elts.modal.classList.remove('active');
            this.elts.modalContent.classList.remove('closeModal')
        }, 400);
        this.elts.modal.classList.remove('error');
        this.elts.signupInput.value = '';
        this.elts.passwordInput.value = '';
    }

    onCloseBtnClick() {
        this.close();
    }

    onOverlayClick() {
        this.close();
    }

    onSubmitBtnClick(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('name', this.elts.signupInput.value);
        data.append('password', this.elts.passwordInput.value);
        data.append('picture', this.elts.fileInput.files[0]);
        data.append('action', 'signup');

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'core/services.php', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
    }

    onScucces(){
        this.elts.modalSuccess.classList.add('active');
        setTimeout(() => {
                this.elts.modalContentSuccess.classList.add('closeModal');
            setTimeout(() => {
                this.elts.modalSuccess.classList.remove('active');
                this.elts.modalContentSuccess.classList.remove('closeModal')
            }, 400);
        }, 2000);
    }

    onResponse() {
        //console.log(this.xhr.responseText)
        const data = JSON.parse(this.xhr.responseText);
        if(data.success) {
            this.close();
            this.onScucces();
            //window.location.href = '/ShaderVisualPosition/dist/experience.php'
        } else {
            this.elts.modal.classList.add('error');
        }
    };
}
