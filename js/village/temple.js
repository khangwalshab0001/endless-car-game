import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createTemple() {

    const temple = new THREE.Group();

    // Base
    const base = new THREE.Mesh(
        new THREE.BoxGeometry(6, 4, 6),
        new THREE.MeshStandardMaterial({
            color: 0xf5deb3
        })
    );

    base.position.y = 2;
    temple.add(base);

    // Shikhar
    const shikhar = new THREE.Mesh(
        new THREE.ConeGeometry(2.2, 4, 4),
        new THREE.MeshStandardMaterial({
            color: 0xff9933
        })
    );

    shikhar.position.y = 6;
    shikhar.rotation.y = Math.PI / 4;
    temple.add(shikhar);

    // Flag Pole
    const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2, 8),
        new THREE.MeshStandardMaterial({
            color: 0x777777
        })
    );

    pole.position.y = 8.5;
    temple.add(pole);

    // Flag
    const flag = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.6),
        new THREE.MeshStandardMaterial({
            color: 0xff6600,
            side: THREE.DoubleSide
        })
    );

    flag.position.set(0.6, 9, 0);
    temple.add(flag);

    return temple;
}
