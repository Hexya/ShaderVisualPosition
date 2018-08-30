/**
 * LoginModal class
 */
export default class LoginModal {

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
        this.elts.modal = document.querySelector('.modal-login');
        this.elts.closeBtn = this.elts.modal.querySelector('.close');
        this.elts.body = this.elts.modal.querySelector('.modal-body');
        this.elts.overlay = this.elts.modal.querySelector('.modal-overlay');
        this.elts.submitBtn = this.elts.modal.querySelector('.submit-btn');
        this.elts.loginInput = this.elts.modal.querySelector('.login-input');
        this.elts.passwordInput = this.elts.modal.querySelector('.password-input');
        this.elts.modalContent = this.elts.modal.querySelector('.modal-content');
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
        var myself = this;
        setTimeout(function(){
            myself.elts.modal.classList.remove('active');
            myself.elts.modalContent.classList.remove('closeModal')
        }, 400);
        this.elts.modal.classList.remove('error');
        this.elts.loginInput.value = '';
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
        data.append('username', this.elts.loginInput.value);
        data.append('password', this.elts.passwordInput.value);
        data.append('action', 'login');

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'core/services.php', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
    }

    /**
     * @function
     * @name onResponse
     * Xhr response login info
     * Add class error on modal on error
     */
    onResponse() {
        const data = JSON.parse(this.xhr.responseText);
        if(data.success) {
            window.location.href = '/ShaderVisualPosition/dist/experience.php'
        } else {
            this.elts.modal.classList.add('error');
        }
    };
}
