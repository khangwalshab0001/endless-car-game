import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createHouse(colliders) {

    const house = new THREE.Group();

    // Walls
    const walls = new THREE.Mesh(
        new THREE.BoxGeometry(8, 5, 8),
        new THREE.MeshStandardMaterial({
            color: 0xd6b48a
        })
    );

    walls.position.y = 2.5;
    house.add(walls);

    // Roof
    const roof = new THREE.Mesh(
        new THREE.ConeGeometry(6.5, 3, 4),
        new THREE.MeshStandardMaterial({
            color: 0x8b0000
        })
    );

    roof.rotation.y = Math.PI / 4;
    roof.position.y = 6.5;
    house.add(roof);

    // Door
    const door = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 3, 0.2),
        new THREE.MeshStandardMaterial({
            color: 0x5c4033
        })
    );

    door.position.set(0, 1.5, 4.1);
    house.add(door);

    // Left Window
    const leftWindow = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.2, 0.15),
        new THREE.MeshStandardMaterial({
            color: 0x87cefa,
            transparent: true,
            opacity: 0.6
        })
    );

    leftWindow.position.set(-2.2, 3, 4.1);
    house.add(leftWindow);

    // Right Window
    const rightWindow = leftWindow.clone();
    rightWindow.position.x = 2.2;
    house.add(rightWindow);

    house.position.set(0, 0, -20);
const collisionBox = new THREE.Mesh(
    new THREE.BoxGeometry(7.5, 5, 7.5),
    new THREE.MeshBasicMaterial({
        visible: false
    })
);

collisionBox.position.set(0, 2.5, 0);

house.add(collisionBox);

house.userData.collider = collisionBox;
    return house;
}
