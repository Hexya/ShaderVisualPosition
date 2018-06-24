import Coordinate from '../components/Coordinate';
import Modal from '../components/Modal';

let wrapper = document.querySelectorAll('.index-wrapper-container');

if(wrapper.length > 0) {
    new Coordinate();
    new Modal();
}
