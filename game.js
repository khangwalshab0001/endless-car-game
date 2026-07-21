import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

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
const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(10, 20, 10);
scene.add(sun);

// Ground
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(300,300),
    new THREE.MeshStandardMaterial({color:0x2e8b57})
);

ground.rotation.x = -Math.PI/2;
scene.add(ground);

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

camera.position.set(0,4,8);
