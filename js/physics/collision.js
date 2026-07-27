import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function checkCollision(player, colliders) {

    const playerBox = new THREE.Box3().setFromObject(player);

    for (const object of colliders) {

        const objectBox = new THREE.Box3().setFromObject(object);

        if (playerBox.intersectsBox(objectBox)) {
            return true;
        }
    }

    return false;
}
