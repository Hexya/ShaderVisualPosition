import * as THREE from 'three';
import Plane from './objects/Plane';

export default class Webgl {
  constructor( width, height ) {
    this.params = {};

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 50, width / height, 1, 1000 );
    this.camera.position.z = 100;

    this.renderer = new THREE.WebGLRenderer();
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

  // State ------

  onSuccess() {
    console.log('SUCCESS');
  }

  onError() {
    console.log('ERROR');
  }

  resize( width, height ) {
    if ( this.composer ) {
      this.composer.setSize( width, height );
    }

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }

  render() {
    this.renderer.render( this.scene, this.camera );

    const time = this._clock.getElapsedTime();

    this.plane.update(time);
  }
}
