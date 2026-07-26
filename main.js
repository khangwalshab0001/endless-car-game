import { scene, camera, renderer } from "./core/scene.js";
import { createPlayer } from "./models/player.js";
import { createRoad } from "./js/world/road.js";
import { createMap } from "./world/map.js";
const player = createPlayer();

scene.add(player);
createRoad(scene);
createMap(scene);
camera.position.set(0, 4, 10);
camera.lookAt(player.position);
function animate() {
    requestAnimationFrame(animate);

    camera.position.x = player.position.x;
    camera.position.y = 4;
    camera.position.z = player.position.z + 8;

    camera.lookAt(player.position);

    renderer.render(scene, camera);
}

animate();
