import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
import { createBody } from "./body.js";

export function createPlayer() {

    const car = new THREE.Group();

    const body = createBody();
    car.add(body);

    car.position.set(0, 0, 0);

    return car;
}
