import { scene, camera, renderer } from "./core/scene.js";
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
);

scene.add(cube);

camera.position.set(0,2,6);
camera.lookAt(cube.position);

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.y += 0.01;

    renderer.render(scene,camera);
}

animate();
