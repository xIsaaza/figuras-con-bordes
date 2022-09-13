//escenario
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)


//camara
const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//GEOMETRIAS 
const textureLoader = new THREE.TextureLoader()
const matcap = textureLoader.load('../img/metalizada.jpg')

// const cubeTextureLoader = new THREE.CubeTextureLoader()
// const evm = cubeTextureLoader.load([
//     "../img/.jpg"
// ])




const material = new THREE. MeshStandardMaterial()
material.matcap = matcap 
material.color.set('red')
material.metalness = 1;
material.roughness = 0;
// scene.background = new THREE.Color(0xeeeeee)
//luz con dirección 
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1000)
directionalLight.position.set(2, 4, 1)
scene.add(directionalLight)

//Orbit controls 
// const control = new THREE.OrbitControls(camara, render.domElement)
// control.minDistance = 10;
// control.maxDistance = 50;

//pointerLockControls
// const control = new THREE.PointerLockControls(camara, render.domElement);
// document.getElementById('btnplay').onclick = () => {
//     control.lock()
// }
const geometry = new THREE.TorusKnotGeometry( 10, 3, 64, 9, 12, 7 );
const torusKnot = new THREE.Mesh( geometry, material );

const geometria = new THREE.BoxGeometry( 1, 1, 1 );
const cube = new THREE.Mesh(geometria, material)

const geometr = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const capsule = new THREE.Mesh(geometr, material)

const geomet = new THREE.ConeGeometry( 5, 20, 32 );
const cone = new THREE.Mesh(geomet,material)


const object = [torusKnot, cube, capsule, cone]
const controls = new THREE.DragControls(object, camara, render.domElement)

controls.addEventListener('hoveron', function (event){
    event.object.material.wireframe = true; 
    event.object.scale.y *=4;
})

controls.addEventListener('hoveroff', function (event){
    event.object.material.wireframe = false;
    event.object.scale.y /=4;
})




// controls.addEventListener('dragstart', function (event){
//     event.object.material
// })

// const ambientaLLight = new THREE.AmbientLight(0xffffff,1)
// scene.add(ambientaLLight);

// const pointLight = new THREE.PointLight(0xffffff, 2)
// scene.add(pointLight)
// pointLight.position.set(5, 5, 5)

scene.background = new THREE.Color(0xeeeeee)








const flyControls = new THREE.FlyControls(camara, render.domElement)
flyControls.movementSpeed = 50;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;

camara.position.z = 50;
camara.position.x = 0;
camara.position.y = 0;
torusKnot.position.x = -40
torusKnot.position.z = 5
cube.position.z = 40
capsule.position.x = 20
capsule.position.z = 20
cone.position.x = 60
//animación 
function animate(){
	requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.x += 0.01;
    flyControls.update(0.5);
    
	render.render( scene, camara );
    scene.add( torusKnot );
    scene.add(cube)
    scene.add(capsule)
    scene.add(cone)
    
}
animate();