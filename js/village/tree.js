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

   // Main Leaves
const leaves1 = new THREE.Mesh(
    new THREE.SphereGeometry(1.8, 16, 16),
    new THREE.MeshStandardMaterial({
        color: 0x228B22
    })
);

leaves1.position.set(0, 4.2, 0);
tree.add(leaves1);

// Left Leaves
const leaves2 = leaves1.clone();
leaves2.position.set(-1.2, 4.0, 0);
tree.add(leaves2);

// Right Leaves
const leaves3 = leaves1.clone();
leaves3.position.set(1.2, 4.0, 0);
tree.add(leaves3);

// Front Leaves
const leaves4 = leaves1.clone();
leaves4.position.set(0, 4.0, 1.2);
tree.add(leaves4);

// Back Leaves
const leaves5 = leaves1.clone();
leaves5.position.set(0, 4.0, -1.2);
tree.add(leaves5);

// Top Leaves
const leaves6 = new THREE.Mesh(
    new THREE.SphereGeometry(1.4, 16, 16),
    new THREE.MeshStandardMaterial({
        color: 0x2e8b57
    })
);

leaves6.position.set(0, 5.5, 0);
tree.add(leaves6);
const collisionBox = new THREE.Mesh(
    new THREE.BoxGeometry(1.0, 3, 1.0),
    new THREE.MeshBasicMaterial({
        visible: false
    })
);

collisionBox.position.set(0, 1.5, 0);

tree.add(collisionBox);

tree.userData.collider = collisionBox;
    return tree;
}
