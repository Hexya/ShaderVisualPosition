let wrapper = document.querySelectorAll('.profil-wrapper-container');

class Profil {

    constructor() {
        this.registerDOM();
        this.registerEvents();
        this.resizeImg();
    }

    registerDOM() {
        this.elt = wrapper[0];
        this.elts = {};
        this.elts.imgCont = this.elt.querySelectorAll('.shader-container');
        this.elts.img = this.elt.querySelectorAll('.shader-content img');
    }

    registerEvents() {
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
