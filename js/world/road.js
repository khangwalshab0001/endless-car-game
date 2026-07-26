import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createRoad(scene) {

    const roads = [];
    const laneLines = [];

    // Road
    for (let i = 0; i < 5; i++) {

        const road = new THREE.Mesh(
            new THREE.PlaneGeometry(12, 200),
            new THREE.MeshStandardMaterial({
                color: 0x333333
            })
        );

        road.rotation.x = -Math.PI / 2;
        road.position.set(0, 0.01, -i * 200);

        scene.add(road);
        roads.push(road);
    }

    // Center Line
    for (let i = 0; i < 60; i++) {

        const line = new THREE.Mesh(
            new THREE.PlaneGeometry(0.18, 4),
            new THREE.MeshStandardMaterial({
                color: 0xffffff
            })
        );

        line.rotation.x = -Math.PI / 2;
        line.position.set(0, 0.02, -i * 8);

        scene.add(line);
        laneLines.push(line);
    }

    // Left Grass
    const leftGrass = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 1000),
        new THREE.MeshStandardMaterial({
            color: 0x2e8b57
        })
    );

    leftGrass.rotation.x = -Math.PI / 2;
    leftGrass.position.set(-56, 0, 0);

    scene.add(leftGrass);

    // Right Grass
    const rightGrass = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 1000),
        new THREE.MeshStandardMaterial({
            color: 0x2e8b57
        })
    );

    rightGrass.rotation.x = -Math.PI / 2;
    rightGrass.position.set(56, 0, 0);

    scene.add(rightGrass);

    return {
        roads,
        laneLines,
        leftGrass,
        rightGrass
    };

}
