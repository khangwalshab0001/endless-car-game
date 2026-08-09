import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createBridge() {

    const bridge = new THREE.Group();

    // Main Bridge Road
    const road = new THREE.Mesh(
        new THREE.BoxGeometry(30, 0.4, 80),
        new THREE.MeshStandardMaterial({
            color: 0x333333
        })
    );

    road.position.set(0, 2, 0);
    bridge.add(road);

    // Left Side Wall
    const leftWall = new THREE.Mesh(
        new THREE.BoxGeometry(1, 2, 80),
        new THREE.MeshStandardMaterial({
            color: 0x777777
        })
    );

    leftWall.position.set(-15, 2.5, 0);
    bridge.add(leftWall);

    // Right Side Wall
    const rightWall = leftWall.clone();

    rightWall.position.x = 15;
    bridge.add(rightWall);
// Bridge Support Pillars

const pillarGeometry = new THREE.BoxGeometry(1.5, 4, 1.5);

const pillarMaterial = new THREE.MeshStandardMaterial({
    color: 0x777777
});

// Pillar 1
const pillar1 = new THREE.Mesh(
    pillarGeometry,
    pillarMaterial
);

pillar1.position.set(-12, 0, -25);
bridge.add(pillar1);

// Pillar 2
const pillar2 = pillar1.clone();
pillar2.position.set(12, 0, -25);
bridge.add(pillar2);

// Pillar 3
const pillar3 = pillar1.clone();
pillar3.position.set(-12, 0, 25);
bridge.add(pillar3);

// Pillar 4
const pillar4 = pillar1.clone();
pillar4.position.set(12, 0, 25);
bridge.add(pillar4);
    // River under the bridge
const river = new THREE.Mesh(
    new THREE.BoxGeometry(100, 0.15, 22),
    new THREE.MeshStandardMaterial({
        color: 0x2f8fbd,
        roughness: 0.3,
        metalness: 0.1
    })
);

river.position.set(0, -0.15, 0);
bridge.add(river);
    // River Bank - Left
const leftBank = new THREE.Mesh(
    new THREE.BoxGeometry(100, 0.2, 6),
    new THREE.MeshStandardMaterial({
        color: 0x8b6b3f
    })
);

leftBank.position.set(0, -0.05, -14);
bridge.add(leftBank);

// River Bank - Right
const rightBank = leftBank.clone();

rightBank.position.set(0, -0.05, 14);
bridge.add(rightBank);
    return bridge;
}
