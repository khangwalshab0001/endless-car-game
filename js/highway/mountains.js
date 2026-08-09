import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createMountains() {

    const mountains = new THREE.Group();

    function createMountain(x, z, scale) {

        const mountain = new THREE.Mesh(
            new THREE.ConeGeometry(35, 70, 8),
            new THREE.MeshStandardMaterial({
                color: 0x5f6f52,
                roughness: 1
            })
        );

        mountain.position.set(x, 35, z);
        mountain.scale.set(scale, scale, scale);

        mountains.add(mountain);
    }

    createMountain(-90, 0, 1.2);
    createMountain(-30, -20, 0.9);
    createMountain(40, 0, 1.1);
    createMountain(100, -30, 1.3);

    return mountains;
}
