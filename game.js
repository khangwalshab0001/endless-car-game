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


// Temporary car
const car = new THREE.Mesh(
    new THREE.BoxGeometry(2,1,4),
    new THREE.MeshStandardMaterial({color:0xff0000})
);

car.position.y = 0.5;
scene.add(car);


// Camera
camera.position.set(0,5,8);


// Controls
const keys = {};

window.addEventListener("keydown",(e)=>{
    keys[e.key] = true;
});

window.addEventListener("keyup",(e)=>{
    keys[e.key] = false;
});


function animate(){

    requestAnimationFrame(animate);


    if(keys["ArrowUp"] || keys["w"]){
        car.position.z -= 0.1;
    }

    if(keys["ArrowDown"] || keys["s"]){
        car.position.z += 0.1;
    }

    if(keys["ArrowLeft"] || keys["a"]){
        car.position.x -= 0.1;
    }

    if(keys["ArrowRight"] || keys["d"]){
        car.position.x += 0.1;
    }


    camera.lookAt(car.position);

    renderer.render(scene,camera);
}

animate();
document.getElementById("up").ontouchstart = () => car.position.z -= 0.3;
document.getElementById("down").ontouchstart = () => car.position.z += 0.3;
document.getElementById("left").ontouchstart = () => car.position.x -= 0.3;
document.getElementById("right").ontouchstart = () => car.position.x += 0.3;
