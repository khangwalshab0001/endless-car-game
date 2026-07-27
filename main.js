import { scene, camera, renderer } from "./core/scene.js";
import { createPlayer } from "./models/player.js";
import { createRoad } from "./js/world/road.js";
import { createMap } from "./js/world/map.js";
import { createHouse } from "./js/village/house.js";
import { createTree } from "./js/village/tree.js";
import { createPole } from "./js/village/pole.js";
import { createShop } from "./js/village/shop.js";
const player = createPlayer();

scene.add(player);
const house = createHouse();
scene.add(house);
// More village houses

for (let i = 0; i < 8; i++) {

    const newHouse = createHouse();

    newHouse.position.set(
        -40 + (i * 12),
        0,
        -45
    );

    scene.add(newHouse);
}

for (let i = 0; i < 8; i++) {

    const newHouse = createHouse();

    newHouse.position.set(
        -40 + (i * 12),
        0,
        45
    );

    scene.add(newHouse);
}
// Village Trees
// Left side trees
for (let i = -60; i <= 60; i += 12) {

    const tree = createTree();
    tree.position.set(-18, 0, i);

    scene.add(tree);
}

// Right side trees
for (let i = -60; i <= 60; i += 12) {

    const tree = createTree();
    tree.position.set(18, 0, i);

    scene.add(tree);
}

// Trees near house
for (let i = 0; i < 8; i++) {

    const tree = createTree();

    tree.position.set(
        -35 + Math.random() * 20,
        0,
        -35 + Math.random() * 20
    );

    scene.add(tree);
}
// Left side poles
for (let i = -60; i <= 60; i += 20) {

    const pole = createPole();
    pole.position.set(-13, 0, i);

    scene.add(pole);
}

// Right side poles
for (let i = -60; i <= 60; i += 20) {

    const pole = createPole();
    pole.position.set(13, 0, i);

    scene.add(pole);
}
const shop = createShop();
shop.position.set(20, 0, -15);

scene.add(shop);
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
