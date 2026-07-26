import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createHeadlights() {

    const lights = new THREE.Group();

    const left = new THREE.Mesh(
        new THREE.BoxGeometry(0.35,0.18,0.12),
        new THREE.MeshStandardMaterial({
            color:0xffffff,
            emissive:0xffffff,
            emissiveIntensity:0.8
        })
    );

    left.position.set(-0.8,1.0,2.43);

    const right = left.clone();
    right.position.x = 0.8;

    lights.add(left);
    lights.add(right);

    return lights;
}
