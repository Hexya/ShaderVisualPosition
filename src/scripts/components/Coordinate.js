import State from '../State';

export default class Coordinate {
    constructor() {

        this.registerDOM();
        this.registerEvents();
    }

    registerDOM() {
        //Dom Elements
        this.elt = document.body.querySelector('.coordinate-container')
        this.elts = {};
        this.elts.country = this.elt.querySelector('.country');
        this.elts.state = this.elt.querySelector('.state');
        this.elts.city = this.elt.querySelector('.city');
        this.elts.latitude = this.elt.querySelector('.latitude');
        this.elts.longitude = this.elt.querySelector('.longitude');
        this.elts.ip = this.elt.querySelector('.ip');
        this.elts.generateBtn = this.elt.querySelector('.generate-btn');
    }

    registerEvents() {
        this.onResponse = this.onResponse.bind(this)
        this.elts.generateBtn.addEventListener('click', this.onGenerateBtnClick.bind(this));
    }

    autoGeo() {
        const data = new FormData();
        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'https://geoip-db.com/json', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
    }

    onGenerateBtnClick() {
        this.autoGeo()
    }

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
