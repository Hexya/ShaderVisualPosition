import * as THREE from 'three';
import vertexShader from './shaders/pVertex.vert';
import fragmentShader from './shaders/pFragment.frag';
import Coordinate from '../../components/Coordinate';

export default class Plane extends THREE.Object3D {
    constructor() {
        super();
        new Coordinate();

        this.geometry = new THREE.PlaneBufferGeometry(  window.innerWidth, window.innerHeight, 10 );

        this.uniforms = {
            uTime: { type: 'f', value: 0},
            uAmp: { type:'f', value: 2. },
            uLon: { type:'f', value: 'lontitude'},
            uLat: { type:'f', value: 'latitude'},
            uFul: { type:'f', value: 'lastLat'},
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

    update(time) {
        this.material.uniforms.uLon.value = document.getElementById('longitude').innerHTML;
        this.material.uniforms.uLat.value = document.getElementById('latitude').innerHTML;
        this.material.uniforms.uFul.value = document.getElementById('latitude').innerHTML.slice(-1);
        this.material.uniforms.uTime.value = time * 0.05;
        this.rotation.z += 0.001;
    }
}
