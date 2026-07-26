import {
    scene,
    camera,
    renderer
} from "./core/scene.js";
import { createPlayer } from "./models/player.js";
import { createRoad } from "./world/road.js";
camera.position.set(0, 5, 10);
const player = createPlayer();

scene.add(player);
const road = createRoad(scene);
camera.lookAt(player.position);
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
