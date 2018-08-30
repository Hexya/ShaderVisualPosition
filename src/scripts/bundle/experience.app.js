import Coordinate from '../components/Coordinate';
import State from '../State';

let wrapper = document.querySelectorAll('.experience-wrapper-container');

/**
 * Experience class
 */
class Experience {

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
     * Get the Dom button and canvas element
     */
    registerDOM() {
        this.elt = wrapper[0];
        this.elts = {};
        this.elts.saveBtn = this.elt.querySelector('.save-btn');
        this.elts.canvas = document.body.querySelector('canvas');
    }

    /**
     * @function
     * @name registerEvents
     * Events listener
     * Bind the click on the corresponding button
     */
    registerEvents() {
        this.elts.saveBtn.addEventListener('click', this.onSaveBtnClick.bind(this));
    }

    /**
     * @function
     * @name createComponents
     * Init Coordinate
     */
    createComponents() {
        this.coordinates = new Coordinate();
    }

    /**
     * @function
     * @name onSaveBtnClick
     * Save canvas Shader and stats on click
     */
    onSaveBtnClick() {
        this.savedData = this.elts.canvas.toDataURL('image/jpeg', .7);
        const data = new FormData();
        data.append('base64', this.savedData);
        data.append('country', State.country);
        data.append('state', State.state);
        data.append('city', State.city);
        data.append('latitude', State.latitude);
        data.append('longitude', State.longitude);
        data.append('action', 'saveImg');

        this.xhr = new XMLHttpRequest();
        this.xhr.open('POST', 'core/services.php', true);
        this.xhr.onload = this.onResponse;
        this.xhr.send(data);
        /*const url = URL.createObjectURL(dataURItoBlob(this.savedData));*/
        /*console.log(url)
        const img = document.createElement('img')
        img.src = this.savedData
        document.body.appendChild(img)*/
        this.elts.saveBtn.classList.add('invert');
    }

}

/**
 * Check if the page exist
 */
if(wrapper.length > 0) {
    new Experience();
}
