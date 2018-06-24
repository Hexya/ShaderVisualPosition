export default class Modal {
    constructor(width, height) {

        var login = document.getElementById("login-btn");
        var signup = document.getElementById("signup-btn");
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        var content = document.querySelector('.modal-body');

        function init() {
        }
        function event() {

            login.addEventListener('click',() => {
                modal.style.display = "block";
                content.innerHTML = '<p>Login</p>';
            });
            signup.addEventListener('click',() => {
                modal.style.display = "block";
                content.innerHTML = '<p>Signup</p>';
            });

            span.addEventListener('click',() => {
                modal.style.display = "none";
            });

            window.addEventListener('click',(event) => {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        }

        init();
        event();
    }
}
