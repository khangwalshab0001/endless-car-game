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
    // Petrol Pump Canopy
const canopy = new THREE.Mesh(
    new THREE.BoxGeometry(16, 0.5, 11),
    new THREE.MeshStandardMaterial({
        color: 0xd62828
    })
);

canopy.position.set(0, 4, 5);
pump.add(canopy);

// Canopy Pillar 1
const pillar1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 4, 0.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff
    })
);

pillar1.position.set(-6, 2, 1);
pump.add(pillar1);

// Canopy Pillar 2
const pillar2 = pillar1.clone();
pillar2.position.set(6, 2, 1);
pump.add(pillar2);

// Canopy Pillar 3
const pillar3 = pillar1.clone();
pillar3.position.set(-6, 2, 9);
pump.add(pillar3);

// Canopy Pillar 4
const pillar4 = pillar1.clone();
pillar4.position.set(6, 2, 9);
pump.add(pillar4);
    // Petrol Pump Parking
const parking = new THREE.Mesh(
    new THREE.BoxGeometry(30, 0.05, 22),
    new THREE.MeshStandardMaterial({
        color: 0x555555
    })
);

parking.position.set(0, 0.03, 8);
pump.add(parking);

// Parking Side Lines
for (let i = -12; i <= 12; i += 6) {

    const parkingLine = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.03, 8),
        new THREE.MeshStandardMaterial({
            color: 0xffffff
        })
    );

    parkingLine.position.set(i, 0.07, 14);
    pump.add(parkingLine);
}
    return pump;
}
