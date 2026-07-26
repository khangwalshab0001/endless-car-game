import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export function createRoad(scene){

    const road = new THREE.Mesh(

       new THREE.PlaneGeometry(24,3000)

        new THREE.MeshStandardMaterial({
            color:0x333333
        })

    );

    road.rotation.x = -Math.PI/2;

    road.position.y = 0.05;

    scene.add(road);

    return road;

}
