import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createBumper() {

    const bumper = new THREE.Group();

    const front = new THREE.Mesh(
        new THREE.BoxGeometry(2.55, 0.35, 0.30),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.6,
            roughness: 0.4
        })
    );

    front.position.set(0, 0.45, 2.52);

    bumper.add(front);

    return bumper;
}
