import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createTree() {

    const tree = new THREE.Group();

    // Trunk
    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.4, 3, 12),
        new THREE.MeshStandardMaterial({
            color: 0x6b4423
        })
    );

    trunk.position.y = 1.5;
    tree.add(trunk);

    // Leaves
    const leaves = new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 16, 16),
        new THREE.MeshStandardMaterial({
            color: 0x228B22
        })
    );

    leaves.position.y = 4;
    tree.add(leaves);

    return tree;
}
