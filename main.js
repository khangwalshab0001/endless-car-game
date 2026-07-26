import { scene, camera, renderer } from "./core/scene.js";
import { createPlayer } from "./models/player.js";
import { createRoad } from "./js/world/road.js";
const player = createPlayer();

scene.add(player);
createRoad(scene);
camera.position.set(0, 15, 20);
camera.lookAt(0, 0, -20);
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
