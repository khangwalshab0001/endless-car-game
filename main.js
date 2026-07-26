import {
    scene,
    camera,
    renderer
} from "./core/scene.js";

camera.position.set(0, 5, 10);

function animate() {

    requestAnimationFrame(animate);

    renderer.render(scene, camera);

}

animate();

window.addEventListener("resize", () => {

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

});
