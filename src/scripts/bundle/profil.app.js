import State from "../State";

let wrapper = document.querySelectorAll('.profil-wrapper-container');

class Profil {

    constructor() {
        this.registerDOM();
        this.registerEvents();
        this.resizeImg();
        this.upodateLikeImg();
    }

    registerDOM() {
        this.elt = wrapper[0];
        this.elts = {};
        this.elts.imgCont = this.elt.querySelectorAll('.shader-container');
        this.elts.img = this.elt.querySelectorAll('.shader-content img');
        this.elts.like = this.elt.querySelectorAll('.ice-cream');
    }

    registerEvents() {
        for(var i=0; i<this.elts.like.length; i++) {
            this.elts.like[i].addEventListener('click', this.onLikeBtn.bind(this));
        }
    }

    upodateLikeImg(){
        for(var i=0; i<this.elts.like.length; i++) {
            if (this.elts.like[i].getAttribute('status') == 0) {
                this.elts.like[i].setAttribute('src', 'images/iceCreamP.svg');
            } else {
                this.elts.like[i].setAttribute('src', 'images/iceCreamL.svg');
            }
        }
    }

    onLikeBtn(el) {
        console.log(el.path[0].getAttribute('value'))
        var status = 0;
        if(el.path[0].getAttribute('status') == 0) {
            el.path[0].setAttribute('src','images/iceCreamL.svg');
            el.path[0].classList.add('liked');
            el.path[0].setAttribute('status', 1);
            status = 1;
        } else {
            el.path[0].setAttribute('src','images/iceCreamP.svg');
            el.path[0].setAttribute('status', 0);
            el.path[0].classList.remove('liked');
            status = 0;
        }
        console.log(el.path[0].getAttribute('status'))
        const data = new FormData();
        data.append('imgId', el.path[0].getAttribute('value'));
        data.append('status', status);
        data.append('action', 'likeImg');

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'core/services.php', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
    }

    resizeImg() {
        // Height = width
        for(var i=0; i<this.elts.imgCont.length; i++) {
            this.elts.imgCont[i].style.height = this.elts.imgCont[i].offsetWidth+'px';
            this.elts.imgCont[i].style.height = this.elts.imgCont[i].offsetWidth;
        }
        // Portrait or landscape
        for(var i=0; i<this.elts.img.length; i++) {
            if(this.elts.img[i].width > this.elts.img[i].height) {
                this.elts.img[i].style.height = "100%";
                this.elts.img[i].style.width = "auto";
            } else {
                this.elts.img[i].style.height = "auto";
                this.elts.img[i].style.width = "100%";
            }
        }
    }
}

if(wrapper.length > 0) {
    new Profil();
}
