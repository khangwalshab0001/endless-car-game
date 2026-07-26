import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

export const scene = new THREE.Scene();

scene.background = new THREE.Color(0x6ec6ff);

scene.fog = new THREE.Fog(
    0x6ec6ff,
    80,
    300
);

export const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

export const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("gameCanvas"),
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

const ambient = new THREE.AmbientLight(
    0xffffff,
    1.2
);

scene.add(ambient);

const sun = new THREE.DirectionalLight(
    0xffffff,
    3
);

sun.position.set(40,60,20);

scene.add(sun);
