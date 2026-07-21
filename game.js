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
car.position.set(0,0,0);
console.log("car loaded");

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


// Game loop
function animate(){

    requestAnimationFrame(animate);

    if(move.left){
        car.rotation.y += 0.05;
    }

    if(move.right){
        car.rotation.y -= 0.05;
    }


    let speed = 0;

    if(move.forward){
        speed = 0.12;
    }

    if(move.back){
        speed = -0.06;
    }


    car.position.x -= Math.sin(car.rotation.y) * speed;
    car.position.z -= Math.cos(car.rotation.y) * speed;


    camera.position.x = car.position.x;
    camera.position.z = car.position.z + 8;
    camera.lookAt(car.position);


    renderer.render(scene,camera);
}


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
