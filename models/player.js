import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
import { createBody } from "./body.js";
import { createWheels } from "./wheels.js";
import { createWindows } from "./windows.js";
import { createHeadlights } from "./headlights.js";
export function createPlayer() {

    const car = new THREE.Group();

    const body = createBody();
    car.add(body);
    const wheels = createWheels();
car.add(wheels);
    const windows = createWindows();
car.add(windows);
    const headlights = createHeadlights();
car.add(headlights);
    car.position.set(0, 0, 0);

    return car;
}
