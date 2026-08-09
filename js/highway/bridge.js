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

    return bridge;
}
