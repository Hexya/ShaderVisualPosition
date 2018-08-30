import State from '../State';

let wrapper = document.querySelectorAll('.experience-wrapper-container');

/**
 * Coordiante class
 */
export default class Coordinate {

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
     * Get the Dom data element
     */
    registerDOM() {
        //Dom Elements
        this.elt = wrapper[0];
        this.elts = {};
        this.elts.country = this.elt.querySelector('.country');
        this.elts.state = this.elt.querySelector('.state');
        this.elts.city = this.elt.querySelector('.city');
        this.elts.latitude = this.elt.querySelector('.latitude');
        this.elts.longitude = this.elt.querySelector('.longitude');
        this.elts.ip = this.elt.querySelector('.ip');
        this.elts.generateBtn = this.elt.querySelector('.generate-btn');
        this.elts.transition = this.elt.querySelector('.transition');
        this.elts.transitionTxt = this.elt.querySelector('.loading');
    }

    /**
     * @function
     * @name registerEvents
     * Events listener
     * Bind the click on the generating button
     */
    registerEvents() {
        this.onResponse = this.onResponse.bind(this)
        this.elts.generateBtn.addEventListener('click', this.onGenerateBtnClick.bind(this));
    }

    /**
     * @function
     * @name autogeo
     * Geoip
     * Geolocalisation Api
     * Return the coordinate of the position
     */
    autoGeo() {
        const data = new FormData();
        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'https://geoip-db.com/json', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
    }

    /**
     * @function
     * @name generateTransition
     * Transition between the click & the generation
     */
    generateTransition() {
        this.elts.transition.classList.add('generate-transition');
        this.elts.transitionTxt.classList.add('generating');
        setTimeout(()=> {
            this.elt.querySelector('.generate-container').style.display = 'none';
            this.elt.querySelector('.save-btn').classList.add('downloadSee');
        },1000);
        setTimeout(()=> {
            this.elt.querySelector('.transition').style.height = '0px';
            this.elt.querySelector('.loading').style.height = '0px';
        },5000);
    }

    /**
     * @function
     * @name onGenerateBtnClick
     * Action on click
     * Generate the transition and call the Geoip Api
     */
    onGenerateBtnClick() {
        this.generateTransition();
        this.autoGeo();
    }

    /**
     * @function
     * @name onResponse
     * Xhr response like info
     * Return the coordinate from the Geoip Api
     */
    onResponse() {
        const data = JSON.parse(this.xhr.responseText);
        State.country = data.country_name;
        State.state = data.state;
        State.city = data.city;
        State.latitude = data.latitude;
        State.longitude = data.longitude;
        State.ip = data.IPv4;

        this.elts.country.innerHTML = State.country;
        this.elts.state.innerHTML = State.state;
        this.elts.city.innerHTML = State.city;
        this.elts.latitude.innerHTML = State.latitude;
        this.elts.longitude.innerHTML = State.longitude;
        this.elts.ip.innerHTML = State.ip;
    };
}
