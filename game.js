import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x6ec6ff);
scene.fog = new THREE.Fog(0x6ec6ff, 80, 300);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("gameCanvas"),
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

// Lights
const ambient = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 3);
sun.position.set(40, 60, 20);
sun.castShadow = true;
scene.add(sun);

// Ground


// Car
const car = new THREE.Group();

// Body
const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.2,0.8,4),
    new THREE.MeshStandardMaterial({color:0x111111})
);
body.position.y = 0.7;
car.add(body);

// Roof
const roof = new THREE.Mesh(
    new THREE.BoxGeometry(1.5,0.6,2),
    new THREE.MeshStandardMaterial({color:0x222222})
);
roof.position.y = 1.3;
roof.position.z = -0.2;
car.add(roof);

// Wheels
function wheel(x,z){
    const w = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4,0.4,0.35,24),
        new THREE.MeshStandardMaterial({color:0x111111})
    );
    w.rotation.z = Math.PI/2;
    w.position.set(x,0.4,z);
    return w;
}

car.add(wheel(-1,1.4));
car.add(wheel(1,1.4));
car.add(wheel(-1,-1.4));
car.add(wheel(1,-1.4));

scene.add(car);
// TREES
const trees = [];

function createTree(x, z) {

    const tree = new THREE.Group();

    // Trunk
    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.3, 2),
        new THREE.MeshStandardMaterial({ color: 0x8b5a2b })
    );

    trunk.position.y = 1;
    tree.add(trunk);

    // Leaves
    const leaves = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0x1f8f2e })
    );

    leaves.position.y = 2.7;
    tree.add(leaves);

    tree.position.set(x, 0, z);

    scene.add(tree);
    trees.push(tree);
}
for (let i = 0; i < 40; i++) {

    createTree(-10, -i * 25);
    createTree(10, -i * 25);

}
camera.position.set(0,4,8);
// ROAD
// ROAD SEGMENTS
const roads = [];

for (let i = 0; i < 5; i++) {

    const road = new THREE.Mesh(
        new THREE.PlaneGeometry(12, 200),
        new THREE.MeshStandardMaterial({
            color: 0x333333
        })
    );

    road.rotation.x = -Math.PI / 2;

    road.position.set(
        0,
        0.01,
        -i * 200
    );

    scene.add(road);

    roads.push(road);

}
// CENTER LINE
// DASHED CENTER LINES
const laneLines = [];

for (let i = 0; i < 60; i++) {

    const line = new THREE.Mesh(
        new THREE.PlaneGeometry(0.18, 4),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );

    line.rotation.x = -Math.PI / 2;

    line.position.set(
        0,
        0.02,
        -i * 8
    );

    scene.add(line);
    laneLines.push(line);
}
// LEFT GRASS
const leftGrass = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 1000),
    new THREE.MeshStandardMaterial({ color: 0x2e8b57 })
);

leftGrass.rotation.x = -Math.PI / 2;
leftGrass.position.set(-56, 0, 0);
scene.add(leftGrass);

// RIGHT GRASS
const rightGrass = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 1000),
    new THREE.MeshStandardMaterial({ color: 0x2e8b57 })
);

rightGrass.rotation.x = -Math.PI / 2;
rightGrass.position.set(56, 0, 0);
scene.add(rightGrass);
// Car Position
car.position.set(0, 0, 0);

// Camera Position
camera.position.set(0, 5, 10);
camera.lookAt(car.position);

// Keyboard Controls
const keys = {};
["left","right","up","down"].forEach(id => {
  const btn = document.getElementById(id);

  btn.addEventListener("touchstart", (e) => {
    e.preventDefault();

    if (id === "left") keys["ArrowLeft"] = true;
    if (id === "right") keys["ArrowRight"] = true;
    if (id === "up") keys["ArrowUp"] = true;
    if (id === "down") keys["ArrowDown"] = true;
  });

  btn.addEventListener("touchend", (e) => {
    e.preventDefault();

    if (id === "left") keys["ArrowLeft"] = false;
    if (id === "right") keys["ArrowRight"] = false;
    if (id === "up") keys["ArrowUp"] = false;
    if (id === "down") keys["ArrowDown"] = false;
  });
});
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});
document.getElementById("left").addEventListener("touchstart", () => keys["ArrowLeft"] = true);
document.getElementById("left").addEventListener("touchend", () => keys["ArrowLeft"] = false);

document.getElementById("right").addEventListener("touchstart", () => keys["ArrowRight"] = true);
document.getElementById("right").addEventListener("touchend", () => keys["ArrowRight"] = false);

document.getElementById("up").addEventListener("touchstart", () => keys["ArrowUp"] = true);
document.getElementById("up").addEventListener("touchend", () => keys["ArrowUp"] = false);

document.getElementById("down").addEventListener("touchstart", () => keys["ArrowDown"] = true);
document.getElementById("down").addEventListener("touchend", () => keys["ArrowDown"] = false);
// Animation
function animate() {

    requestAnimationFrame(animate);

    // Car always moves forward
    car.position.z -= 0.25;

    // Left
    if (keys["ArrowLeft"] || keys["a"]) {
        car.position.x -= 0.15;
    }

    // Right
    if (keys["ArrowRight"] || keys["d"]) {
        car.position.x += 0.15;
    }
// Road Boundary
if (car.position.x < -3)
    car.position.x = -3;

if (car.position.x > 3)
    car.position.x = 3;
    // Camera Follow
    camera.position.x += (car.position.x - camera.position.x) * 0.08;
camera.position.z += ((car.position.z + 10) - camera.position.z) * 0.08;
camera.position.y = 5;

    camera.lookAt(
        car.position.x,
        car.position.y + 1,
        car.position.z
    );
// MOVE LANE LINES
laneLines.forEach(line => {

    line.position.z += 0.25;

    if (line.position.z > car.position.z + 20) {

        line.position.z -= 480;

    }
});
// ENDLESS ROAD

roads.forEach((road) => {

    road.position.z += 0.25;

    if (road.position.z > car.position.z + 100) {

        road.position.z -= 1000;

    }

});
    // MOVE TREES
trees.forEach(tree => {

    tree.position.z += 0.25;

    if (tree.position.z > car.position.z + 20) {

        tree.position.z -= 1000;

    }

});
    renderer.render(scene, camera);
}

animate();
if (keys["ArrowLeft"]) car.position.x -= 0.15;
if (keys["ArrowRight"]) car.position.x += 0.15;

if (keys["ArrowUp"]) speed += 0.005;
if (keys["ArrowDown"]) speed -= 0.005;
// Resize
window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

});
