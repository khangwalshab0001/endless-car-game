import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createRoad(scene) {

    const road = new THREE.Mesh(
    new THREE.BoxGeometry(22, 0.2, 220),
    new THREE.MeshStandardMaterial({
        color: 0x333333
    })
);

    road.position.set(0, 0.1, -20);

    scene.add(road);
   // Village Chowk
const chowk = new THREE.Mesh(
    new THREE.BoxGeometry(26, 0.2, 26),
    new THREE.MeshStandardMaterial({
        color: 0x333333
    })
);

chowk.position.set(0, 0.1, 20);

scene.add(chowk);
 // North Road
const northRoad = new THREE.Mesh(
    new THREE.BoxGeometry(22, 0.2, 80),
    new THREE.MeshStandardMaterial({
        color: 0x333333
    })
);

northRoad.position.set(0, 0.1, 73);

scene.add(northRoad); 
  // East Road
const eastRoad = new THREE.Mesh(
    new THREE.BoxGeometry(90, 0.2, 22),
    new THREE.MeshStandardMaterial({
        color: 0x333333
    })
);

eastRoad.position.set(56, 0.1, 20);

scene.add(eastRoad); 
    // West Road
const westRoad = new THREE.Mesh(
    new THREE.BoxGeometry(90, 0.2, 22),
    new THREE.MeshStandardMaterial({
        color: 0x333333
    })
);

westRoad.position.set(-56, 0.1, 20);

scene.add(westRoad);
    // Left dirt shoulder
const leftShoulder = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.05, 300),
    new THREE.MeshStandardMaterial({
        color: 0x8B6B3F
    })
);

leftShoulder.position.set(-11.5, 0.02, 0);
scene.add(leftShoulder);

// Right dirt shoulder
const rightShoulder = leftShoulder.clone();
rightShoulder.position.x = 11.5;
scene.add(rightShoulder);
// Center lane lines
for (let i = -140; i < 150; i += 10) {

    const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.03, 5),
        new THREE.MeshStandardMaterial({
            color: 0xffffff
        })
    );

    line.position.set(0, 0.22, i);

    scene.add(line);
}
    return road;
}
