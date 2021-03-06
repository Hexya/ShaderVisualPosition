import State from "../State";

let wrapper = document.querySelectorAll('.wire-news-wrapper-container');

/**
 * Wire news Page
 */
class WireNews {

    /**
     * @function
     * @name constructor
     * Constructor
     */
    constructor() {
        this.registerDOM();
        this.registerEvents();
        this.updateLikeImg();
    }

    /**
     * @function
     * @name registerDom
     * Dom elements
     * Get the Dom button element
     */
    registerDOM() {
        this.elt = wrapper[0];
        this.elts = {};
        this.elts.like = this.elt.querySelectorAll('.litle-ice-cream');

        //Comment

        this.elts.commentInput = this.elt.querySelectorAll('.comment-input');
    }

    /**
     * @function
     * @name registerEvents
     * Events listener
     * Bind the click on the corresponding button
     */
    registerEvents() {
        for(var i=0; i<this.elts.like.length; i++) {
            this.elts.like[i].addEventListener('click', this.onLikeBtn.bind(this));
        }
        this.onResponseCom = this.onResponseCom.bind(this)
        for(var j=0;j<this.elt.querySelectorAll('.comment-btn').length;j++) {
            this.elt.querySelectorAll('.comment-btn')[j].addEventListener('click', this.onSubmitBtnClick.bind(this));
        }
    }

    /**
     * @function
     * @name updateLikeImg
     * Update image on like
     */
    updateLikeImg(){
        for(var i=0; i<this.elts.like.length; i++) {
            if (this.elts.like[i].getAttribute('status') == 0) {
                console.log(this.elts.like[i].getAttribute('status'))
                this.elts.like[i].setAttribute('src', 'images/iceCreamPL.svg');
            } else {
                this.elts.like[i].setAttribute('src', 'images/iceCreamLL.svg');
            }
        }
    }

    /**
     * @function
     * @name onLikeBtn
     * Like button click action
     * @param el - The like button clicked
     */
    onLikeBtn(el) {
        //console.log(el.path[3].querySelector('.comment-btn').getAttribute('data-like'))
        var status = 0;
        var likes = el.path[3].querySelector('.comment-btn').getAttribute('data-like');
        if(el.path[0].getAttribute('status') == 0) {
            el.path[0].setAttribute('src','images/iceCreamLL.svg');
            el.path[0].classList.add('liked');
            el.path[0].setAttribute('status', 1);
            status = 1;
            likes ++;
        } else {
            console.log('like' + likes)
            el.path[0].setAttribute('src','images/iceCreamPL.svg');
            el.path[0].setAttribute('status', 0);
            el.path[0].classList.remove('liked');
            status = 0;
            likes --;
        }
        el.path[0].setAttribute('data-like', likes)
        var likeparent =el.path[0].parentNode;
        likeparent.parentNode.parentNode.querySelector('.like-count').innerHTML= likes + ' Like';
        //console.log(el.path[0].getAttribute('status'))
        const data = new FormData();
        data.append('imgId', el.path[0].getAttribute('value'));
        data.append('status', status);
        data.append('action', 'likeImg');

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'core/services.php', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
    }

    /**
     * @function
     * @name onResponse
     * Xhr response like info
     * @param response - request return
     */
    onResponse(response) {
        //console.log(response);
    }

    /**
     * @function
     * @name onSubmitBtnClick
     * Submit comment action
     * @param event - the input action target
     */
    onSubmitBtnClick(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('comment', event.target.parentNode.querySelector('.comment-input').value);
        data.append('action', 'comment');
        data.append('id', event.target.getAttribute('data-id'));
        event.target.parentNode.querySelector('.comments-container').innerHTML += '<p><span class="user-name">'+ event.target.getAttribute('data-name') +' </span> '+event.target.parentNode.querySelector('.comment-input').value +'</p>';

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'core/services.php', true);
        this.xhr.onload = this.onResponseCom;
        this.xhr.send(data);

        event.target.parentNode.querySelector('.comment-input').value = '';
    }

    /**
     * @function
     * @name onResponseCom
     * Xhr response info
     * @param responseSubmit - request return
     */
    onResponseCom(responseSubmit) {
        //console.log(JSON.parse(this.xhr.responseText));
        var data = JSON.parse(this.xhr.responseText);
    };
}

/**
 * Check if the page exist
 */
if(wrapper.length > 0) {
    new WireNews();
}
