import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createWindows() {

    const glass = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({
        color: 0x88aaff,
        transparent: true,
        opacity: 0.45
    });

    // Windshield
    const front = new THREE.Mesh(
        new THREE.BoxGeometry(1.55, 0.45, 0.08),
        material
    );

    front.position.set(0, 1.55, 1.05);
    front.rotation.x = -0.55;

    glass.add(front);

    // Rear Glass
    const rear = new THREE.Mesh(
        new THREE.BoxGeometry(1.55, 0.45, 0.08),
        material
    );

    rear.position.set(0, 1.55, -1.20);
    rear.rotation.x = 0.55;

    glass.add(rear);

    return glass;
}
