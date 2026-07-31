import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createHighway() {

    const highway = new THREE.Group();

    // Main Highway
    const road = new THREE.Mesh(
       new THREE.BoxGeometry(30, 0.2, 700)
        new THREE.MeshStandardMaterial({
            color: 0x2f2f2f
        })
    );

    road.position.set(0, 0.1, -250);
    highway.add(road);
// Highway Divider
const divider = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.4, 700),
    new THREE.MeshStandardMaterial({
        color: 0xb0b0b0
    })
);

divider.position.set(0, 0.3, -250);

highway.add(divider);
    // Left Lane Markings
for (let i = -590; i <= 90; i += 12) {

    const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.05, 6),
        new THREE.MeshStandardMaterial({
            color: 0xffffff
        })
    );

    line.position.set(-7.5, 0.35, i);
    highway.add(line);
}

// Right Lane Markings
for (let i = -590; i <= 90; i += 12) {

    const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.05, 6),
        new THREE.MeshStandardMaterial({
            color: 0xffffff
        })
    );

    line.position.set(7.5, 0.35, i);
    highway.add(line);
}
    // Left Barrier
const leftBarrier = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1, 700),
    new THREE.MeshStandardMaterial({
        color: 0x888888
    })
);

leftBarrier.position.set(-15, 0.5, -250);
highway.add(leftBarrier);

// Right Barrier
const rightBarrier = leftBarrier.clone();
rightBarrier.position.x = 15;
highway.add(rightBarrier);
    // Left Grass
const leftGrass = new THREE.Mesh(
    new THREE.BoxGeometry(10, 0.05, 700),
    new THREE.MeshStandardMaterial({
        color: 0x4CAF50
    })
);

leftGrass.position.set(-20, 0.02, -250);
highway.add(leftGrass);

// Right Grass
const rightGrass = leftGrass.clone();
rightGrass.position.x = 20;
highway.add(rightGrass);
    return highway;
}
