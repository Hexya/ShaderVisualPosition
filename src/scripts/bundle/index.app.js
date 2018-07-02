
import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LoginModal';


let wrapper = document.body.querySelectorAll('.index-wrapper-container');

class Home {
    constructor() {
        this.registerDOM();
        this.createComponents();
        this.registerEvents();
    }

    registerDOM() {
        this.elt = wrapper[0]
        this.elts = {}
        this.elts.signupBtn = this.elt.querySelector('.signup-btn')
        this.elts.loginBtn = this.elt.querySelector('.login-btn')
    }

    registerEvents() {
        this.elts.signupBtn.addEventListener('click', this.onSignupBtnClick.bind(this))
        this.elts.loginBtn.addEventListener('click', this.onLoginBtnClick.bind(this))
    }

    createComponents() {
        this.signupModal = new SignupModal();
        this.loginModal  = new LoginModal();
    }

    onSignupBtnClick() {
        this.signupModal.open()
    }

    onLoginBtnClick() {
        this.loginModal.open();
    }
}

if(wrapper.length > 0) {
    new Home();
}
