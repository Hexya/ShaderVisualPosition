/**
 * SignupModal class
 */
export default class SignupModal {

    /**
     * @function
     * @name constructor
     * Constructor
     */
    constructor() {
        this.registerDOM();
        this.registerEvents();
    }

    /**
     * @function
     * @name registerDom
     * Dom elements
     * Get the Dom modals element
     */
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

    /**
     * @function
     * @name registerEvents
     * Events listener
     * Bind the click on the corresponding button
     */
    registerEvents() {
        this.onResponse = this.onResponse.bind(this)
        this.elts.closeBtn.addEventListener('click', this.onCloseBtnClick.bind(this));
        this.elts.overlay.addEventListener('click', this.onOverlayClick.bind(this));
        this.elts.submitBtn.addEventListener('click', this.onSubmitBtnClick.bind(this));
    }

    /**
     * @function
     * @name open
     * Add the class active to the target modal
     */
    open() {
        this.elts.modal.classList.add('active');
    }

    /**
     * @function
     * @name close
     * Add the class closeModal and remove the class active to the target modal
     * Remove the input value
     */
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

    /**
     * @function
     * @name onCloseBtnClick / onOverlayClick
     * Tell the close function
     */
    onCloseBtnClick() {
        this.close();
    }
    onOverlayClick() {
        this.close();
    }

    /**
     * @function
     * @name onSubmitBtnClick
     * Submit comment action
     * @param event - the target modal
     */
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

    /**
     * @function
     * @name onSucces
     * onResponse success value
     */
    onSucces(){
        this.elts.modalSuccess.classList.add('active');
        setTimeout(() => {
                this.elts.modalContentSuccess.classList.add('closeModal');
            setTimeout(() => {
                this.elts.modalSuccess.classList.remove('active');
                this.elts.modalContentSuccess.classList.remove('closeModal')
            }, 400);
        }, 2000);
    }

    /**
     * @function
     * @name onResponse
     * Xhr response signup info
     * Add class error on modal on error
     */
    onResponse() {
        //console.log(this.xhr.responseText)
        const data = JSON.parse(this.xhr.responseText);
        if(data.success) {
            this.close();
            this.onSucces();
            //window.location.href = '/ShaderVisualPosition/dist/experience.php'
        } else {
            this.elts.modal.classList.add('error');
        }
    };
}
