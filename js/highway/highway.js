import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createHighway() {

    const highway = new THREE.Group();

    // Main Highway
    const road = new THREE.Mesh(
        new THREE.BoxGeometry(30, 0.2, 500),
        new THREE.MeshStandardMaterial({
            color: 0x2f2f2f
        })
    );

    road.position.set(0, 0.1, -400);
    highway.add(road);

    return highway;
}
