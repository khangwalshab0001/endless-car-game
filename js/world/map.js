import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createMap(scene) {

    // Ground
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(3000,3000),
        new THREE.MeshStandardMaterial({
            color:0x5f8f52
        })
    );

    ground.rotation.x = -Math.PI/2;
    scene.add(ground);

    // Village Area
    const village = new THREE.Mesh(
        new THREE.PlaneGeometry(300,300),
        new THREE.MeshStandardMaterial({
            color:0x78a85a
        })
    );

    village.rotation.x = -Math.PI/2;
    village.position.set(0,0.01,0);

    scene.add(village);

    // City Area
    const city = new THREE.Mesh(
        new THREE.PlaneGeometry(450,450),
        new THREE.MeshStandardMaterial({
            color:0x666666
        })
    );

    city.rotation.x = -Math.PI/2;
    city.position.set(700,0.02,0);

    scene.add(city);

    // Mountain Area
    const mountains = new THREE.Mesh(
        new THREE.PlaneGeometry(700,700),
        new THREE.MeshStandardMaterial({
            color:0xffffff
        })
    );

    mountains.rotation.x = -Math.PI/2;
    mountains.position.set(-700,0.03,-500);

    scene.add(mountains);
}
