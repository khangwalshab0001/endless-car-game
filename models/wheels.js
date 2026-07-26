import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createWheels() {

    const wheels = new THREE.Group();

    function wheel(x, z) {

        const tyre = new THREE.Mesh(

            new THREE.CylinderGeometry(
                0.5,
                0.5,
                0.4,
                32
            ),

            new THREE.MeshStandardMaterial({
                color: 0x111111,
                roughness: 1
            })

        );

        tyre.rotation.z = Math.PI / 2;

        tyre.position.set(x, 0.5, z);

        wheels.add(tyre);

    }

    wheel(-1.2, 1.6);
    wheel(1.2, 1.6);

    wheel(-1.2, -1.6);
    wheel(1.2, -1.6);

    return wheels;

}
