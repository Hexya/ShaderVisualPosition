import * as THREE from 'three';
import vertexShader from './shaders/pVertex.vert';
import fragmentShader from './shaders/pFragment.frag';
import Coordinate from '../../components/Coordinate';
import State from '../../State'

/**
 * Plane class
 * Creation of the plane
 */
export default class Plane extends THREE.Object3D {
    /**
     * @function
     * @name constructor
     * Generation of the basis mesh
     */
    constructor() {
        super();

        if(document.querySelectorAll('.experience-wrapper-container').length > 0) {
            new Coordinate();
        }

        this.geometry = new THREE.PlaneBufferGeometry(  window.innerWidth, window.innerHeight, 10 );

        /**
         * Uniforms params
         * To pass value from js to glsl
         * @type {{uTime: {type: string, value: number}, uAmp: {type: string, value: number}, uLon: {type: string, value: string}, uLat: {type: string, value: string}, uFul: {type: string, value: string}, uLastLon: {type: string, value: string}}}
         */
        this.uniforms = {
            uTime: { type: 'f', value: 0},
            uAmp: { type:'f', value: 2. },
            uLon: { type:'f', value: 'longitude'},
            uLat: { type:'f', value: 'latitude'},
            uFul: { type:'f', value: 'lastLat'},
            uLastLon: { type:'f', value: 'lastLon'},
        };

        this.material = new THREE.ShaderMaterial({
            transparent: true,
            uniforms: this.uniforms,
            vertexShader,
            fragmentShader,
        });

        this.mesh = new THREE.Mesh( this.geometry, this.material );

        this.add( this.mesh );
    }

    /**
     * @function
     * @name update
     * Define the uniforms value
     * @param time - use the THREE.Clock() to update
     */
    update(time) {
        this.material.uniforms.uLon.value = State.longitude;
        this.material.uniforms.uLat.value = State.latitude;
        let uFul = State.latitude + ''
        uFul = uFul.slice(-1);
        this.material.uniforms.uFul.value = uFul;
        let uLastLon = State.latitude + ''
        uLastLon = uLastLon.slice(-1);
        this.material.uniforms.uLastLon.value = uLastLon;
        this.material.uniforms.uTime.value = time * 0.05;
        this.rotation.z += 0.001;
    }
}
