import SignupModal from '../components/SignupModal';
import LoginModal from '../components/LoginModal';

let wrapper = document.body.querySelectorAll('.index-wrapper-container');

/**
 * Home Page
 */
class Home {

    /**
     * @function
     * @name constructor
     * Constructor
     */
    constructor() {
        this.registerDOM();
        this.createComponents();
        this.registerEvents();
    }

    /**
     * @function
     * @name registerDom
     * Dom elements
     * Get the Dom button element
     */
    registerDOM() {
        this.elt = wrapper[0]
        this.elts = {}
        this.elts.signupBtn = this.elt.querySelector('.signup-btn')
        this.elts.loginBtn = this.elt.querySelector('.login-btn')
    }

    /**
     * @function
     * @name registerEvents
     * Events listener
     * Bind the click on the corresponding button
     */
    registerEvents() {
        this.elts.signupBtn.addEventListener('click', this.onSignupBtnClick.bind(this))
        this.elts.loginBtn.addEventListener('click', this.onLoginBtnClick.bind(this))
    }

    /**
     * @function
     * @name createComponents
     * Init modals
     */
    createComponents() {
        this.signupModal = new SignupModal();
        this.loginModal  = new LoginModal();
    }

    /**
     * @function
     * @name onSignupBtnClick / onLoginBtnClick
     * Action on click
     */
    onSignupBtnClick() {
        this.signupModal.open()
    }
    onLoginBtnClick() {
        this.loginModal.open();
    }
}

/**
 * Check if the page exist
 */
if(wrapper.length > 0) {
    new Home();
}
