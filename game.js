const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("game"),
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

// Road
const roadGeometry=new THREE.BoxGeometry(6,0.2,200);

const roadMaterial=new THREE.MeshStandardMaterial({
color:0x444444
});

const road=new THREE.Mesh(roadGeometry,roadMaterial);

scene.add(road);

// Light
const light=new THREE.DirectionalLight(0xffffff,2);

light.position.set(10,20,10);

scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff,1));

// Temporary Car
const carGeometry=new THREE.BoxGeometry(1,0.7,2);

const carMaterial=new THREE.MeshStandardMaterial({
color:0x111111
});

const car=new THREE.Mesh(carGeometry,carMaterial);

car.position.y=0.6;

scene.add(car);

camera.position.set(0,3,6);

function animate(){

requestAnimationFrame(animate);

camera.position.z=car.position.z+6;

camera.lookAt(car.position);

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
