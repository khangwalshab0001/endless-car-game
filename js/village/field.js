import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
export function createField() {
    const field = new THREE.Group();
    // Soil
    const soil = new THREE.Mesh(
        new THREE.BoxGeometry(18, 0.2, 18),
        new THREE.MeshStandardMaterial({
            color: 0x8b5a2b
        })
    );
    soil.position.y = 0.05;
    field.add(soil);
    // Crop rows
    for (let z = -7; z <= 7; z += 2) {
        const crop = new THREE.Mesh(
            new THREE.BoxGeometry(16, 0.4, 0.5),
            new THREE.MeshStandardMaterial({
                color: 0x4caf50
            })
        );
        crop.position.set(0, 0.35, z);
        field.add(crop);
    }
    return field;
}
