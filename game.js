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
    new THREE.BoxGeometry(2.4, 0.9, 4.6),
    new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.5,
        roughness: 0.4
    })
);

body.position.y = 0.8;
car.add(body);



// Roof
const roof = new THREE.Mesh(
    new THREE.BoxGeometry(1.8,0.7,2.5),
    new THREE.MeshStandardMaterial({
        color:0x1a1a1a,
        metalness:0.4,
        roughness:0.5
    })
);

roof.position.set(0,1.55,-0.1);
car.add(roof);
// Windshield
const glass = new THREE.Mesh(
    new THREE.BoxGeometry(1.6,0.45,1.3),
    new THREE.MeshStandardMaterial({
        color:0x88aaff,
        transparent:true,
        opacity:0.55
    })
);

glass.position.set(0,1.55,0.75);
glass.rotation.x = -0.35;
car.add(glass);
// Left Window
const leftWindow = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.45, 2.1),
    new THREE.MeshStandardMaterial({
        color: 0x88aaff,
        transparent: true,
        opacity: 0.55
    })
);

leftWindow.position.set(-0.92, 1.45, -0.05);
car.add(leftWindow);

// Right Window
const rightWindow = leftWindow.clone();
rightWindow.position.x = 0.92;
car.add(rightWindow);
// Bonnet
const bonnet = new THREE.Mesh(

    new THREE.BoxGeometry(2.15, 0.35, 1.45),

    new THREE.MeshStandardMaterial({

        color: 0x111111,

        metalness: 0.5,

        roughness: 0.4

    })

);

bonnet.position.set(0, 1.0, 1.85);

bonnet.rotation.x = -0.18;

car.add(bonnet);


// Rear Boot
const boot = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 0.55, 0.9),
    new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.5,
        roughness: 0.4
    })
);

boot.position.set(0, 0.95, -2.05);
car.add(boot);
// Left Taillight
const tail1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.28, 0.18, 0.08),
    new THREE.MeshStandardMaterial({
        color: 0xff0000,
        emissive: 0xaa0000,
        emissiveIntensity: 1.2
    })
);

tail1.position.set(-0.75, 0.95, -2.5);
car.add(tail1);

// Right Taillight
const tail2 = tail1.clone();
tail2.position.x = 0.75;
car.add(tail2);
// Front Left Arch
const archFL = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.55, 0.9),
    new THREE.MeshStandardMaterial({ color: 0x111111 })
);
archFL.position.set(-1.2, 0.65, 1.4);
car.add(archFL);

// Front Right Arch
const archFR = archFL.clone();
archFR.position.x = 1.2;
car.add(archFR);

// Rear Left Arch
const archRL = archFL.clone();
archRL.position.set(-1.2, 0.65, -1.4);
car.add(archRL);

// Rear Right Arch
const archRR = archFL.clone();
archRR.position.set(1.2, 0.65, -1.4);
car.add(archRR);
// Front Bumper
const bumper = new THREE.Mesh(
    new THREE.BoxGeometry(2.35, 0.45, 0.35),
    new THREE.MeshStandardMaterial({
        color: 0x222222,
        metalness: 0.3,
        roughness: 0.6
    })
);

bumper.position.set(0, 0.45, 2.45);
car.add(bumper);
// Number Plate
const plate = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.18, 0.03),
    new THREE.MeshStandardMaterial({
        color: 0xffffff
    })
);

plate.position.set(0, 0.45, 2.64);
car.add(plate);
// Left Headlight
const headLightL = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.18, 0.08),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.5
    })
);

headLightL.position.set(-0.75, 0.95, 2.25);
car.add(headLightL);
// Right Headlight
const headLightR = new THREE.Mesh(
    new THREE.BoxGeometry(0.45, 0.18, 0.08),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.5
    })
);

headLightR.position.set(0.75, 0.95, 2.25);
car.add(headLightR);
// Rear Spoiler
const spoiler = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.08, 0.35),
    new THREE.MeshStandardMaterial({
        color: 0x111111
    })
);
// Left Mirror
const mirrorL = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.18, 0.28),
    new THREE.MeshStandardMaterial({
        color: 0x111111
    })
);

mirrorL.position.set(-1.28, 1.35, 0.75);
car.add(mirrorL);
// Right Mirror
const mirrorR = mirrorL.clone();
mirrorR.position.x = 1.28;
car.add(mirrorR);
// Front Left Fender
const fenderFL = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.7, 1.0),
    new THREE.MeshStandardMaterial({ color: 0x111111 })
);

fenderFL.position.set(-1.18, 0.75, 1.4);
car.add(fenderFL);

// Front Right Fender
const fenderFR = fenderFL.clone();
fenderFR.position.x = 1.18;
car.add(fenderFR);

// Rear Left Fender
const fenderRL = fenderFL.clone();
fenderRL.position.set(-1.18, 0.75, -1.4);
car.add(fenderRL);

// Rear Right Fender
const fenderRR = fenderFL.clone();
fenderRR.position.set(1.18, 0.75, -1.4);
car.add(fenderRR);
// Left Door Line
const doorLineL = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.65, 2.2),
    new THREE.MeshStandardMaterial({
        color: 0x555555
    })
);

doorLineL.position.set(-1.22, 1.0, -0.05);
car.add(doorLineL);

// Right Door Line
const doorLineR = doorLineL.clone();
doorLineR.position.x = 1.22;
car.add(doorLineR);
// Left Handle
const handleL = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.06, 0.28),
    new THREE.MeshStandardMaterial({
        color: 0xc0c0c0
    })
);

handleL.position.set(-1.23, 1.1, 0.15);
car.add(handleL);

// Right Handle
const handleR = handleL.clone();
handleR.position.x = 1.23;
car.add(handleR);
spoiler.position.set(0, 1.95, -2.35);
car.add(spoiler);
// Vertical Grille Bars
for (let i = -3; i <= 3; i++) {

    const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.28, 0.03),
        new THREE.MeshStandardMaterial({
            color: 0x999999
        })
    );

    bar.position.set(i * 0.18, 0.75, 2.37);
    car.add(bar);
}
// Left Headlight
const headLight1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.18, 0.08),
    new THREE.MeshStandardMaterial({
        color: 0xffffcc,
        emissive: 0xffffaa,
        emissiveIntensity: 1.5
    })
);

headLight1.position.set(-0.75, 0.95, 2.35);
car.add(headLight1);

// Right Headlight
const headLight2 = headLight1.clone();
headLight2.position.x = 0.75;
car.add(headLight2);
// Front Grille
const grille = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 0.35, 0.05),
    new THREE.MeshStandardMaterial({
        color: 0x555555
    })
);

grille.position.set(0, 0.75, 2.33);
car.add(grille);
// Wheels
function wheel(x,z){
    const w = new THREE.Mesh(
    new THREE.CylinderGeometry(0.52, 0.52, 0.42, 32),
    new THREE.MeshStandardMaterial({ color: 0x111111 })
);
    w.rotation.z = Math.PI/2;
    w.position.set(x,0.52,z);
    return w;
}

car.add(wheel(-1.18,1.6));
car.add(wheel(1.18,1.6));
car.add(wheel(-1.18,-1.6));
car.add(wheel(1.18,-1.6));

scene.add(car);
// TRAFFIC CARS
const trafficCars = [];

function createTrafficCar(x, z, color = 0xff0000) {

    const enemy = new THREE.Group();

    const body = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 0.8, 4),
        new THREE.MeshStandardMaterial({ color })
    );

    body.position.y = 0.7;
    enemy.add(body);

    enemy.position.set(x, 0.5, z);

    scene.add(enemy);
    trafficCars.push(enemy);
}
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
createTrafficCar(-2, -20, 0xff0000);
createTrafficCar(2, -40, 0x0066ff);
createTrafficCar(0, -60, 0xffff00);
createTrafficCar(-2, -80, 0xffffff);
createTrafficCar(2, -100, 0x00ff66);
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
// Left Road Edge
const leftEdge = [];

for (let i = 0; i < 60; i++) {

    const line = new THREE.Mesh(
        new THREE.PlaneGeometry(0.25, 4),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );

    line.rotation.x = -Math.PI / 2;
    line.position.set(-5.8, 0.03, -i * 8);

    scene.add(line);
    leftEdge.push(line);
}

// Right Road Edge
const rightEdge = [];

for (let i = 0; i < 60; i++) {

    const line = new THREE.Mesh(
        new THREE.PlaneGeometry(0.25, 4),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );

    line.rotation.x = -Math.PI / 2;
    line.position.set(5.8, 0.03, -i * 8);

    scene.add(line);
    rightEdge.push(line);
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
let speed = 0;
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
    // Acceleration System
if (typeof speed === "undefined") {
    speed = 0;
}

if (keys["ArrowUp"] || keys["w"]) {
    speed += 0.01;
}

if (keys["ArrowDown"] || keys["s"]) {
    speed -= 0.02;
}

speed *= 0.98;

if (speed < 0) speed = 0;
if (speed > 0.6) speed = 0.6;

car.position.z -= speed;

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

    line.position.z += speed;

    if (line.position.z > car.position.z + 20) {

        line.position.z -= 480;

    }
});
leftEdge.forEach(line => {

    line.position.z += speed;

    if (line.position.z > car.position.z + 20) {
        line.position.z -= 480;
    }

});

rightEdge.forEach(line => {

    line.position.z += speed;

    if (line.position.z > car.position.z + 20) {
        line.position.z -= 480;
    }

});    
// ENDLESS ROAD

roads.forEach((road) => {

    road.position.z += speed;

    if (road.position.z > car.position.z + 100) {

        road.position.z -= 1000;

    }

});
    // MOVE TREES
trees.forEach(tree => {
// COLLISION
trafficCars.forEach(enemy => {

    const dx = Math.abs(car.position.x - enemy.position.x);
    const dz = Math.abs(car.position.z - enemy.position.z);

    if (dx < 1.8 && dz < 3.5) {

        alert("💥 Game Over!");

        location.reload();

    }

});
    tree.position.z += speed;

    if (tree.position.z > car.position.z + 20) {

        tree.position.z -= 1000;

    }

});
   // MOVE TRAFFIC CARS
trafficCars.forEach(carObj => {

    carObj.position.z += speed;

    // Jab car player ke paas se nikal jaye to use aage bhej do
    if (carObj.position.z > car.position.z + 30) {

        carObj.position.z = car.position.z - 450 - Math.random() * 250;

        // Random lane
        const lanes = [-2, 0, 2];
        carObj.position.x = lanes[Math.floor(Math.random() * lanes.length)];
    }

}); 
    renderer.render(scene, camera);
}

animate();
if (keys["ArrowLeft"]) car.position.x -= 0.15;
if (keys["ArrowRight"]) car.position.x += 0.15;


// Resize
window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

});
