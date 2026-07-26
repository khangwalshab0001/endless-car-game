import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createPlayer() {

    const player = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 4),
        new THREE.MeshStandardMaterial({
            color: 0xff0000
        })
    );

    player.position.set(0, 1, 0);

    return player;
}
