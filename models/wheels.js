import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

function createWheel(x, z) {

    const wheel = new THREE.Group();

    const tyre = new THREE.Mesh(
        new THREE.CylinderGeometry(0.42, 0.42, 0.32, 32),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.9
        })
    );

    tyre.rotation.z = Math.PI / 2;
    wheel.add(tyre);

    const rim = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.22, 0.34, 24),
        new THREE.MeshStandardMaterial({
            color: 0xbdbdbd,
            metalness: 0.9,
            roughness: 0.2
        })
    );

    rim.rotation.z = Math.PI / 2;
    wheel.add(rim);

    wheel.position.set(x, 0.42, z);

    return wheel;
}

export function createWheels() {

    const wheels = new THREE.Group();

    wheels.add(createWheel(-1.15, 1.6));   // Front Left
    wheels.add(createWheel( 1.15, 1.6));   // Front Right
    wheels.add(createWheel(-1.15,-1.6));   // Rear Left
    wheels.add(createWheel( 1.15,-1.6));   // Rear Right

    return wheels;
}
