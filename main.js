import { scene, camera, renderer } from "./core/scene.js";
import { createPlayer } from "./models/player.js";

const player = createPlayer();

scene.add(player);

camera.position.set(0, 2, 8);
camera.lookAt(player.position);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();
