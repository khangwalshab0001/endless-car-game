import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createPlayer() {

    const car = new THREE.Group();

    // Body
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.9, 4.6),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.5,
            roughness: 0.4
        })
    );

    body.position.y = 0.8;
    car.add(body);

    // Roof
    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(1.8,0.7,2.5),
        new THREE.MeshStandardMaterial({
            color:0x1a1a1a
        })
    );

    roof.position.set(0,1.55,-0.1);
    car.add(roof);

    car.position.set(0,0,0);

    return car;
}
