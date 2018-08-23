import Webgl from './Webgl';
import raf from 'raf';
import 'gsap';
import $ from 'jquery';
window.$ = $;

let webgl;

// webgl settings
webgl = new Webgl( window.innerWidth, window.innerHeight );
document.body.appendChild( webgl.renderer.domElement );

function init() {
    animate();
    require('./bundle/index.app.js');
    require('./bundle/experience.app.js');
    require('./bundle/profil.app.js');
    require('./bundle/wireNews.app.js');
}

function resizeHandler() {
  webgl.resize( window.innerWidth, window.innerHeight );
}

function animate() {
  raf( animate );
  webgl.render();
}

// handle resize
window.addEventListener( 'resize', resizeHandler );
resizeHandler();

init();