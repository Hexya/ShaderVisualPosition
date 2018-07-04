export default class LoginModal {
    constructor() {

        this.registerDOM();
        this.registerEvents();

    }

    registerDOM() {
        //Dom Elements
        this.elts = {};
        this.elts.modal = document.querySelector('.modal-login');
        this.elts.closeBtn = this.elts.modal.querySelector('.close');
        this.elts.body = this.elts.modal.querySelector('.modal-body');
        this.elts.overlay = this.elts.modal.querySelector('.modal-overlay');
        this.elts.submitBtn = this.elts.modal.querySelector('.submit-btn');
        this.elts.loginInput = this.elts.modal.querySelector('.login-input');
        this.elts.passwordInput = this.elts.modal.querySelector('.password-input');
        this.elts.modalContent = this.elts.modal.querySelector('.modal-content');
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
        var myself = this;
        setTimeout(function(){
            myself.elts.modal.classList.remove('active');
            myself.elts.modalContent.classList.remove('closeModal')
        }, 400);
        this.elts.modal.classList.remove('error');
        this.elts.loginInput.value = '';
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
        data.append('username', this.elts.loginInput.value);
        data.append('password', this.elts.passwordInput.value);
        data.append('action', 'login');

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'core/services.php', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
    }

    onResponse() {
        const data = JSON.parse(this.xhr.responseText);
        if(data.success) {
            window.location.href = '/ShaderVisualPosition/dist/experience.php'
        } else {
            this.elts.modal.classList.add('error');
        }
    };
}
