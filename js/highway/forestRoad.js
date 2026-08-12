import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createForestRoad() {

    const road = new THREE.Group();

    // Main Kaccha Road
    const dirtRoad = new THREE.Mesh(
        new THREE.BoxGeometry(8, 0.12, 500),
        new THREE.MeshStandardMaterial({
            color: 0x8B6B3F,
            roughness: 1
        })
    );

    dirtRoad.position.set(0, 0.06, 0);
    road.add(dirtRoad);

    // Left Dirt Edge
    const leftEdge = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.05, 500),
        new THREE.MeshStandardMaterial({
            color: 0x6f522f
        })
    );

    leftEdge.position.set(-4.5, 0.08, 0);
    road.add(leftEdge);

    // Right Dirt Edge
    const rightEdge = leftEdge.clone();

    rightEdge.position.x = 4.5;
    road.add(rightEdge);

    return road;
}
