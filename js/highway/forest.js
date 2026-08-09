import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createForest() {

    const forest = new THREE.Group();

    // Forest Ground
    const ground = new THREE.Mesh(
        new THREE.BoxGeometry(220, 0.1, 300),
        new THREE.MeshStandardMaterial({
            color: 0x3f7f3f
        })
    );

    ground.position.set(0, -0.02, 0);
    forest.add(ground);

    // Create Tree
    function createForestTree() {

        const tree = new THREE.Group();

        // Trunk
        const trunk = new THREE.Mesh(
            new THREE.CylinderGeometry(0.35, 0.45, 3, 10),
            new THREE.MeshStandardMaterial({
                color: 0x5a3820
            })
        );

        trunk.position.y = 1.5;
        tree.add(trunk);

        // Leaves
        const leaves = new THREE.Mesh(
            new THREE.SphereGeometry(2, 12, 12),
            new THREE.MeshStandardMaterial({
                color: 0x176b2c
            })
        );

        leaves.position.y = 4;
        tree.add(leaves);

        return tree;
    }

    // Left Side Forest
    for (let i = 0; i < 25; i++) {

        const tree = createForestTree();

        tree.position.set(
            -35 - Math.random() * 70,
            0,
            -140 + Math.random() * 280
        );

        const scale = 0.8 + Math.random() * 0.6;
        tree.scale.set(scale, scale, scale);

        forest.add(tree);
    }

    // Right Side Forest
    for (let i = 0; i < 25; i++) {

        const tree = createForestTree();

        tree.position.set(
            35 + Math.random() * 70,
            0,
            -140 + Math.random() * 280
        );

        const scale = 0.8 + Math.random() * 0.6;
        tree.scale.set(scale, scale, scale);

        forest.add(tree);
    }

    return forest;
}
