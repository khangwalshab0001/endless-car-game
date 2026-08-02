import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createPetrolPump() {

    const pump = new THREE.Group();

    // Office
    const office = new THREE.Mesh(
        new THREE.BoxGeometry(12, 5, 8),
        new THREE.MeshStandardMaterial({
            color: 0xf5f5dc
        })
    );

    office.position.set(0, 2.5, 0);
    pump.add(office);

    // Roof
    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(14, 0.4, 10),
        new THREE.MeshStandardMaterial({
            color: 0xcc3333
        })
    );

    roof.position.set(0, 5.3, 0);
    pump.add(roof);
// Fuel Dispenser 1
const dispenser1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 2, 0.8),
    new THREE.MeshStandardMaterial({
        color: 0xffffff
    })
);

dispenser1.position.set(-2.5, 1, 5);
pump.add(dispenser1);

// Fuel Dispenser 2
const dispenser2 = dispenser1.clone();
dispenser2.position.x = 0;
pump.add(dispenser2);

// Fuel Dispenser 3
const dispenser3 = dispenser1.clone();
dispenser3.position.x = 2.5;
pump.add(dispenser3);
    return pump;
}
