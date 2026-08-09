import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createCity() {

    const city = new THREE.Group();

    // City Ground
    const ground = new THREE.Mesh(
        new THREE.BoxGeometry(300, 0.1, 300),
        new THREE.MeshStandardMaterial({
            color: 0x777777
        })
    );

    ground.position.set(0, -0.02, 0);
    city.add(ground);


    // City Main Road
    const mainRoad = new THREE.Mesh(
        new THREE.BoxGeometry(32, 0.2, 300),
        new THREE.MeshStandardMaterial({
            color: 0x303030
        })
    );

    mainRoad.position.set(0, 0.1, 0);
    city.add(mainRoad);


    // Road Center Lines
    for (let z = -140; z <= 140; z += 12) {

        const line = new THREE.Mesh(
            new THREE.BoxGeometry(0.35, 0.04, 6),
            new THREE.MeshStandardMaterial({
                color: 0xffffff
            })
        );

        line.position.set(0, 0.23, z);
        city.add(line);
    }


    // Side Road 1
    const sideRoad1 = new THREE.Mesh(
        new THREE.BoxGeometry(140, 0.2, 18),
        new THREE.MeshStandardMaterial({
            color: 0x303030
        })
    );

    sideRoad1.position.set(-50, 0.1, -50);
    city.add(sideRoad1);


    // Side Road 2
    const sideRoad2 = sideRoad1.clone();

    sideRoad2.position.set(50, 0.1, 50);
    city.add(sideRoad2);


    // Building Creator
    function createBuilding(x, z, width, height, depth) {

        const building = new THREE.Mesh(
            new THREE.BoxGeometry(width, height, depth),
            new THREE.MeshStandardMaterial({
                color: 0xb0b0b0
            })
        );

        building.position.set(
            x,
            height / 2,
            z
        );

        city.add(building);
    }


    // Buildings
    createBuilding(-45, -90, 18, 25, 18);
    createBuilding(45, -100, 22, 32, 20);

    createBuilding(-50, -20, 20, 18, 20);
    createBuilding(50, -10, 18, 22, 18);

    createBuilding(-55, 70, 25, 28, 22);
    createBuilding(55, 80, 20, 20, 20);


    return city;
}
