import * as THREE from 'three';
import Plane from './objects/Plane';

/**
 *  Webgl class
 * WebGl init
 */
export default class Webgl {

  /**
   * @function
   * @name constructor
   * @param width - window width
   * @param height - window height
   * Configuration of the Webgl scene
   */
  constructor( width, height ) {
    this.params = {};

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 50, width / height, 1, 1000 );
    this.camera.position.z = 100;

    this.renderer = new THREE.WebGLRenderer({
        preserveDrawingBuffer: true
    });
    this.renderer.setSize( width, height );
    this.renderer.setClearColor( 0x000000 );

    // this.controls = new OrbitControls( this.camera );

    this.composer = null;

    this.plane = new Plane()
    this.plane.position.set(0,0,0);
    this. scene.add( this.plane );

    this._clock = new THREE.Clock();

    this.onSuccess = this.onSuccess.bind(this)
    this.onError = this.onError.bind(this)
  }


  /**
   * @function
   * @name onSucces
   * Success return
   */
  onSuccess() {
    console.log('SUCCESS');
  }

  /**
   * @function
   * @name onError
   * Error return
   */
  onError() {
    console.log('ERROR');
  }

  /**
   * @function
   * @name resize
   * @param width - window width
   * @param height - window height
   */
  resize( width, height ) {
    if ( this.composer ) {
      this.composer.setSize( width, height );
    }

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

  /**
   * @function
   * @name render
   * Render of the gl scene
   */
  render() {
    this.renderer.render( this.scene, this.camera );

    const time = this._clock.getElapsedTime();

    this.plane.update(time);
  }
}
