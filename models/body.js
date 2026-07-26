import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createBody() {

    const body = new THREE.Group();

    // Main Body
    const base = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 0.8, 4.8),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.65,
            roughness: 0.35
        })
    );

    base.position.y = 0.8;
    body.add(base);

    // Roof
    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.7, 2.6),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.65,
            roughness: 0.35
        })
    );

    roof.position.set(0, 1.55, -0.1);

    body.add(roof);

    
// Bonnet

const bonnet = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 0.35, 1.2),
    new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.65,
        roughness: 0.35
    })
);

bonnet.position.set(0, 0.95, 1.85);

body.add(bonnet);
// Front Left Arch
const flArch = new THREE.Mesh(
    new THREE.BoxGeometry(0.25,0.55,0.8),
    new THREE.MeshStandardMaterial({
        color:0x111111,
        metalness:0.6,
        roughness:0.35
    })
);
flArch.position.set(-1.15,0.75,1.45);
body.add(flArch);

// Front Right Arch
const frArch = flArch.clone();
frArch.position.x = 1.15;
body.add(frArch);

// Rear Left Arch
const rlArch = flArch.clone();
rlArch.position.set(-1.15,0.75,-1.45);
body.add(rlArch);

// Rear Right Arch
const rrArch = flArch.clone();
rrArch.position.set(1.15,0.75,-1.45);
body.add(rrArch);
return body;
}
