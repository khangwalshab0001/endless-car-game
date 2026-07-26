import { scene, camera, renderer } from "./core/scene.js";
import { createPlayer } from "./models/player.js";
import { createRoad } from "./js/world/road.js";
const player = createPlayer();

scene.add(player);
createRoad(scene);
camera.position.set(0, 4, 10);
camera.lookAt(player.position);
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
