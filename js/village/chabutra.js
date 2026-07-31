import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createChabutra() {

    const chabutra = new THREE.Group();

    // Base
    const base = new THREE.Mesh(
        new THREE.CylinderGeometry(3, 3, 0.5, 24),
        new THREE.MeshStandardMaterial({
            color: 0x999999
        })
    );

    base.position.y = 0.25;
    chabutra.add(base);

    return chabutra;
}
