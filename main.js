import { scene, camera, renderer } from "./core/scene.js";
import { createPlayer } from "./models/player.js";
import { createRoad } from "./js/world/road.js";
import { createMap } from "./js/world/map.js";
import { createHouse } from "./js/village/house.js";
import { createTree } from "./js/village/tree.js";
import { createPole } from "./js/village/pole.js";
import { createShop } from "./js/village/shop.js";
import { createTemple } from "./js/village/temple.js";
import { createField } from "./js/village/field.js";
const player = createPlayer();
const keys = {
    up: false,
    down: false,
    left: false,
    right: false
};
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

upBtn.addEventListener("touchstart", () => keys.up = true);
upBtn.addEventListener("touchend", () => keys.up = false);

downBtn.addEventListener("touchstart", () => keys.down = true);
downBtn.addEventListener("touchend", () => keys.down = false);

leftBtn.addEventListener("touchstart", () => keys.left = true);
leftBtn.addEventListener("touchend", () => keys.left = false);

rightBtn.addEventListener("touchstart", () => keys.right = true);
rightBtn.addEventListener("touchend", () => keys.right = false);
let speed = 0;
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
const temple = createTemple();
temple.position.set(-25, 0, 25);

scene.add(temple);
const field1 = createField();
field1.position.set(45, 0, 35);
scene.add(field1);
const field2 = createField();
field2.position.set(-55, 0, -35);
scene.add(field2);
createMap(scene);
createRoad(scene);

camera.position.set(0,4,10);
camera.lookAt(player.position);
function animate() {
    requestAnimationFrame(animate);

    camera.position.x += (player.position.x - camera.position.x) * 0.10;
camera.position.y = 4;
camera.position.z += ((player.position.z + 10) - camera.position.z) * 0.10;

    camera.lookAt(player.position);
// Forward / Backward
if (keys.up) {
    player.translateZ(-0.25);
}

if (keys.down) {
    player.translateZ(0.15);
}

// Steering
if (keys.left) {
    player.rotation.y += 0.04;
}

if (keys.right) {
    player.rotation.y -= 0.04;
}
    renderer.render(scene, camera);
}

animate();
