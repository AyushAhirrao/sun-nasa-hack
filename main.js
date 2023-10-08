// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import starsTexture from './src/img/stars.jpg';
// import sunTexture from './src/img/sun.jpg';
// import earthTexture from './src/img/earth.jpg';

// const container1 = document.getElementById("add");
// const container2 = document.getElementById("add1");

// const renderer1 = new THREE.WebGL1Renderer();
// const renderer2 = new THREE.WebGL1Renderer();

// // Set renderer sizes to half of the window width
// renderer1.setSize(window.innerHeight / 2, window.innerWidth);
// renderer2.setSize(window.innerHeight / 2, window.innerWidth);

// container1.appendChild(renderer1.domElement);
// container2.appendChild(renderer2.domElement);

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   45,
//   (window.innerHeight / 2) / window.innerWidth,
//   0.1,
//   1000
// );

// // Adjust the pixel ratio and set the size for both renderers
// const pixelRatio = window.devicePixelRatio;
// renderer1.setPixelRatio(pixelRatio);
// renderer2.setPixelRatio(pixelRatio);

// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture,
//   starsTexture
// ]);

// const orbit = new OrbitControls(camera, renderer1.domElement);
// const orbit2 = new OrbitControls(camera, renderer2.domElement);
// camera.position.set(-90, 140, 140);
// orbit.update();
// orbit2.update();

// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

// const textureload = new THREE.TextureLoader();
// const sunGeo = new THREE.SphereGeometry(12, 25, 20);
// const sunMat = new THREE.MeshBasicMaterial({
//   map: textureload.load(sunTexture)
// });
// const sun = new THREE.Mesh(sunGeo, sunMat);
// scene.add(sun);

// const pointLight = new THREE.PointLight(0xffffff, 3, 300);
// scene.add(pointLight);

// function createPlanet(size, texture, position, ring) {
//   const geometry = new THREE.SphereGeometry(size, 25, 20);
//   const material = new THREE.MeshStandardMaterial({
//     map: textureload.load(texture)
//   });
//   const planet = new THREE.Mesh(geometry, material);
//   const planetObj = new THREE.Object3D;
//   planetObj.add(planet);
//   scene.add(planetObj);
//   planet.position.x = position;

//   if (ring) {
//     const RingGeo = new THREE.RingGeometry(
//       ring.innerRadius,
//       ring.outerRadius, 30
//     );
//     const RingMat = new THREE.MeshStandardMaterial({
//       map: textureload.load(ring.texture),
//       side: THREE.DoubleSide
//     });
//     const Ring = new THREE.Mesh(RingGeo, RingMat);
//     planetObj.add(Ring);

//     Ring.position.x = position;
//     Ring.rotation.x = -0.5 * Math.PI;
//   }
//   return {
//     planet,
//     planetObj
//   };
// }

// const earth = createPlanet(5.56, earthTexture, 60);

// function animate() {
//   sun.rotateY(0.002);
//   earth.planet.rotateY(0.012);
//   earth.planetObj.rotateY(0.0012);

//   renderer1.render(scene, camera);
//   renderer2.render(scene, camera);
// }

// renderer1.setAnimationLoop(animate);
// renderer2.setAnimationLoop(animate);

// window.addEventListener('resize', function () {
//   camera.aspect = (window.innerHeight / 2) / window.innerWidth;
//   camera.updateProjectionMatrix();
//   renderer1.setSize(window.innerHeight / 2, window.innerWidth);
//   renderer2.setSize(window.innerHeight / 2, window.innerWidth);
// });


import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';
import starsTexture from './src/img/stars.jpg';
import sunTexture from './src/img/sun.jpg';
import earthTexture from './src/img/earth.jpg';

const container1 = document.getElementById("add");
const container2 = document.getElementById("add1");

const renderer1 = new THREE.WebGL1Renderer();
const renderer2 = new THREE.WebGL1Renderer();

// Set renderer sizes to half of the window width
renderer1.setSize((window.innerHeight / 2) - 50, window.innerWidth);
renderer2.setSize((window.innerHeight / 2) - 50, window.innerWidth);

container1.appendChild(renderer1.domElement);
container2.appendChild(renderer2.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  (window.innerHeight / 2) / window.innerWidth,
  0.1,
  1000
);


// Adjust the pixel ratio and set the size for both renderers
const pixelRatio = window.devicePixelRatio;
renderer1.setPixelRatio(pixelRatio);
renderer2.setPixelRatio(pixelRatio);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture,
  starsTexture
]);

const orbit = new OrbitControls(camera, renderer1.domElement);
const orbit2 = new OrbitControls(camera, renderer2.domElement);
camera.position.set(-90, 140, 140);
orbit.update();
orbit2.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const textureload = new THREE.TextureLoader();
const sunGeo = new THREE.SphereGeometry(12, 25, 20);
const sunMat = new THREE.MeshBasicMaterial({
  map: textureload.load(sunTexture)
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

const pointLight = new THREE.PointLight(0xffffff, 3, 300);
scene.add(pointLight);

function createPlanet(size, texture, position, ring) {
  const geometry = new THREE.SphereGeometry(size, 25, 20);
  const material = new THREE.MeshStandardMaterial({
    map: textureload.load(texture)
  });
  const planet = new THREE.Mesh(geometry, material);
  const planetObj = new THREE.Object3D;
  planetObj.add(planet);
  scene.add(planetObj);
  planet.position.x = position;

  if (ring) {
    const RingGeo = new THREE.RingGeometry(
      ring.innerRadius,
      ring.outerRadius, 30
    );
    const RingMat = new THREE.MeshStandardMaterial({
      map: textureload.load(ring.texture),
      side: THREE.DoubleSide
    });
    const Ring = new THREE.Mesh(RingGeo, RingMat);
    planetObj.add(Ring);

    Ring.position.x = position;
    Ring.rotation.x = -0.5 * Math.PI;
  }
  return {
    planet,
    planetObj
  };
}

// Add planets from the first code
const mercury = createPlanet(4, './src/img/mercury.jpg', 20);
const venus = createPlanet(5, './src/img/venus.jpg', 40);
const mars = createPlanet(5, './src/img/mars.jpg', 80);
const jupiter = createPlanet(6, './src/img/jupiter.jpg', 100);
const saturn = createPlanet(8, './src/img/saturn.jpg', 150, {
  innerRadius: 10,
  outerRadius: 20,
  texture: './src/img/saturn_ring.png'
});
const uranus = createPlanet(8.2, './src/img/uranus.jpg', 200, {
  innerRadius: 10,
  outerRadius: 20,
  texture: './src/img/uranus_ring.png'
});
const neptune = createPlanet(5, './src/img/neptune.jpg', 240);

const earth = createPlanet(5.56, earthTexture, 60);

function animate() {
  sun.rotateY(0.002);
  mercury.planet.rotateY(0.001);
  mercury.planetObj.rotateY(0.001);
  venus.planet.rotateY(0.0012);
  venus.planetObj.rotateY(0.0015);
  earth.planet.rotateY(0.012);
  earth.planetObj.rotateY(0.0012);
  mars.planet.rotateY(0.013);
  mars.planetObj.rotateY(0.0019);
  jupiter.planet.rotateY(0.04);
  jupiter.planetObj.rotateY(0.0023);
  saturn.planet.rotateY(0.01);
  saturn.planetObj.rotateY(0.0021);
  uranus.planet.rotateY(0.01);
  uranus.planetObj.rotateY(0.0015);
  neptune.planet.rotateY(0.01);
  neptune.planetObj.rotateY(0.001);

  renderer1.render(scene, camera);
  renderer2.render(scene, camera);
}

renderer1.setAnimationLoop(animate);
renderer2.setAnimationLoop(animate);

window.addEventListener('resize', function () {
  camera.aspect = (window.innerHeight / 2) / window.innerWidth;
  camera.updateProjectionMatrix();
  renderer1.setSize(window.innerHeight / 2, window.innerWidth);
  renderer2.setSize(window.innerHeight / 2, window.innerWidth);
});