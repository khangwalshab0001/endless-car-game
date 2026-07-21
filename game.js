import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("gameCanvas")
});

renderer.setSize(window.innerWidth, window.innerHeight);


// Light
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 10, 5);
scene.add(light);


// Ground
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(100,100),
    new THREE.MeshStandardMaterial({color:0x228B22})
);

ground.rotation.x = -Math.PI/2;
scene.add(ground);

// temporary car
// SUV style temporary car

const carGroup = new THREE.Group();

const body = new THREE.Mesh(
    new THREE.BoxGeometry(2.2,0.8,4),
    new THREE.MeshStandardMaterial({
        color:0x111111
    })
);

body.position.y = 0.5;
carGroup.add(body);


// Roof
const roof = new THREE.Mesh(
    new THREE.BoxGeometry(1.6,0.6,1.8),
    new THREE.MeshStandardMaterial({
        color:0x222222
    })
);

roof.position.y = 1.15;
roof.position.z = -0.2;
carGroup.add(roof);


carGroup.position.y = 0;
scene.add(carGroup);

const car = carGroup;


// Camera
camera.position.set(0,4,8);


// Controls
const keys = {};

window.addEventListener("keydown",(e)=>{
    keys[e.key] = true;
});

window.addEventListener("keyup",(e)=>{
    keys[e.key] = false;
});


function animate(){

    requestAnimationFrame(animate);// Car steering movement

// Steering
if(move.left){
    car.rotation.y += 0.05;
}

if(move.right){
    car.rotation.y -= 0.05;
}

// Speed
let speed = 0;

if(move.forward){
    speed = 0.15;
}

if(move.back){
    speed = -0.08;
}

// Move in car direction
car.position.x -= Math.sin(car.rotation.y) * speed;
car.position.z -= Math.cos(car.rotation.y) * speed;

car.position.x -= Math.sin(car.rotation.y) * speed;
car.position.z -= Math.cos(car.rotation.y) * speed;


// Real car movement

let speed = 0;

if(move.forward){
    speed = 0.12;
}

if(move.back){
    speed = -0.06;
}

// Move according to car direction
car.position.x -= Math.sin(car.rotation.y) * speed;
car.position.z -= Math.cos(car.rotation.y) * speed;

    if(keys["ArrowLeft"] || keys["a"]){
        car.position.x -= 0.1;
    }

    if(keys["ArrowRight"] || keys["d"]){
        car.position.x += 0.1;
    }


    camera.lookAt(car.position);

    // Camera follow car
camera.position.x = car.position.x;
camera.position.z = car.position.z + 8;
camera.lookAt(car.position);console.log(move);renderer.render(scene,camera);
}
// Mobile buttons
let move = {
    forward:false,
    back:false,
    left:false,
    right:false
};

document.getElementById("up").ontouchstart = () => move.forward = true;
document.getElementById("up").ontouchend = () => move.forward = false;

document.getElementById("down").ontouchstart = () => move.back = true;
document.getElementById("down").ontouchend = () => move.back = false;

document.getElementById("left").ontouchstart = () => move.left = true;
document.getElementById("left").ontouchend = () => move.left = false;

document.getElementById("right").ontouchstart = () => move.right = true;
document.getElementById("right").ontouchend = () => move.right = false;
animate();
if(move.left){
    car.rotation.y += 0.03;
}

if(move.right){
    car.rotation.y -= 0.03;
}
document.getElementById("up").ontouchstart = () => car.position.z -= 0.3;
document.getElementById("down").ontouchstart = () => car.position.z += 0.3;
document.getElementById("left").ontouchstart = () => car.position.x -= 0.3;
document.getElementById("right").ontouchstart = () => car.position.x += 0.3;
// Mobile touch controls

document.getElementById("up").addEventListener("touchstart", () => {
    car.position.z -= 0.5;
});

document.getElementById("down").addEventListener("touchstart", () => {
    car.position.z += 0.5;
});

document.getElementById("left").addEventListener("touchstart", () => {
    car.position.x -= 0.5;
});

document.getElementById("right").addEventListener("touchstart", () => {
    car.position.x += 0.5;
});
document.getElementById("up").onclick = () => {
    car.position.z -= 1;
};
