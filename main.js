import { scene, camera, renderer } from "./core/scene.js";
import { createPlayer } from "./models/player.js";
import { createRoad } from "./js/world/road.js";
import { createMap } from "./js/world/map.js";
import { createHouse } from "./js/village/house.js";
import { createTree } from "./js/village/tree.js";
const player = createPlayer();

scene.add(player);
const house = createHouse();
scene.add(house);
// Village Trees
for (let i = 0; i < 25; i++) {

    const tree = createTree();

    tree.position.set(
        (Math.random() - 0.5) * 120,
        0,
        (Math.random() - 0.5) * 120
    );

    scene.add(tree);
}
createMap(scene);
createRoad(scene);

camera.position.set(0,4,10);
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
