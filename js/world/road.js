import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createRoad(scene) {

    const road = new THREE.Mesh(
        new THREE.BoxGeometry(20, 0.2, 300),
        new THREE.MeshStandardMaterial({
            color: 0x333333
        })
    );

    road.position.set(0, 0.1, 0);

    scene.add(road);

    return road;
}
