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
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const textureLoader= new THREE.TextureLoader();
const matcap= textureLoader.load('../img/agua.jpg')

const material13 = new THREE.MeshMatcapMaterial()
material13.matcap = matcap
material13.flatShading = true
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 'orange'} ) );


const capsule = new THREE.Mesh(geometry,material13)
scene.add(capsule);
camara.position.z = 10;
camara.position.x = 0;
camara.position.y = 0;

//animación 
function animate(){
	requestAnimationFrame( animate );
    capsule.rotation.y += 0.05;
    capsule.rotation.x += 0.05;
    line.rotation.y += 0.05;
    line.rotation.x += 0.05;
	render.render( scene, camara );
    scene.add( line );
}
animate();