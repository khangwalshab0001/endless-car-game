import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createBody() {

    const body = new THREE.Group();

    // Main Body
    const base = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 0.8, 4.8),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.65,
            roughness: 0.35
        })
    );

    base.position.y = 0.8;
    body.add(base);

    // Roof
    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.7, 2.6),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.65,
            roughness: 0.35
        })
    );

    roof.position.set(0, 1.55, -0.1);

    body.add(roof);

    return body;

}
