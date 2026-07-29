import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createPole() {

    const pole = new THREE.Group();

    // Pole
    const body = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.15, 8, 8),
        new THREE.MeshStandardMaterial({
            color: 0x777777
        })
    );

    body.position.y = 4;
    pole.add(body);

    // Top Bar
    const bar = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 0.15, 0.15),
        new THREE.MeshStandardMaterial({
            color: 0x555555
        })
    );

    bar.position.y = 7.5;
    pole.add(bar);
const collisionBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 8, 0.8),
    new THREE.MeshBasicMaterial({
        visible: false
    })
);

collisionBox.position.set(0, 4, 0);

pole.add(collisionBox);

pole.userData.collider = collisionBox;
    return pole;
}
