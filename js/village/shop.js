import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createShop() {

    const shop = new THREE.Group();

    // Shop Building
    const building = new THREE.Mesh(
        new THREE.BoxGeometry(6, 4, 5),
        new THREE.MeshStandardMaterial({
            color: 0xf2d2a9
        })
    );

    building.position.y = 2;
    shop.add(building);

    // Roof
    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(6.5, 0.4, 5.5),
        new THREE.MeshStandardMaterial({
            color: 0xaa0000
        })
    );

    roof.position.y = 4.2;
    shop.add(roof);

    // Shutter
    const shutter = new THREE.Mesh(
        new THREE.BoxGeometry(3, 2.5, 0.15),
        new THREE.MeshStandardMaterial({
            color: 0x888888
        })
    );

    shutter.position.set(0, 1.3, 2.6);
    shop.add(shutter);

    // Shop Board
    const board = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 0.7, 0.15),
        new THREE.MeshStandardMaterial({
            color: 0x0044aa
        })
    );

    board.position.set(0, 3.3, 2.6);
    shop.add(board);

    return shop;
}
