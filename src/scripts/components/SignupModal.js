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
    }

    registerEvents() {
        this.elts.closeBtn.addEventListener('click', this.onCloseBtnClick.bind(this));
        this.elts.overlay.addEventListener('click', this.onOverlayClick.bind(this));
    }

    open() {
        this.elts.modal.classList.add('active');
    }

    close() {
        this.elts.modal.classList.remove('active');
    }

    onCloseBtnClick() {
        this.close();
    }

    onOverlayClick() {
        this.close();
    }
}
