import Webgl from './Webgl';
import raf from 'raf';
import 'gsap';
import $ from 'jquery';
window.$ = $;

let webgl;

/**
 * Script init
 * @type {Webgl}
 */
webgl = new Webgl( window.innerWidth, window.innerHeight );
document.body.appendChild( webgl.renderer.domElement );

/**
 * @function
 * @name init
 * Require all the bundle
 */
function init() {
    animate();
    require('./bundle/index.app.js');
    require('./bundle/experience.app.js');
    require('./bundle/profil.app.js');
    require('./bundle/wireNews.app.js');
}

/**
 * @function
 * @name resizeHandler
 * Resize function to the window size
 */
function resizeHandler() {
  webgl.resize( window.innerWidth, window.innerHeight );
}

/**
 * @function
 * @name animate
 * Generate the animation
 */
function animate() {
  raf( animate );
  webgl.render();
}

/**
 * Handle resize
 */
window.addEventListener( 'resize', resizeHandler );
resizeHandler();

init();