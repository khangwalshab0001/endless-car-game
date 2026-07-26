import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createGrille() {

    const grille = new THREE.Group();

    for (let i = 0; i < 5; i++) {

        const bar = new THREE.Mesh(
            new THREE.BoxGeometry(1.4, 0.05, 0.05),
            new THREE.MeshStandardMaterial({
                color: 0x888888,
                metalness: 1,
                roughness: 0.2
            })
        );

        bar.position.set(0, 0.75 + i * 0.08, 2.46);

        grille.add(bar);
    }

    return grille;
}
