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
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const textureLoader= new THREE.TextureLoader();
const matcap= textureLoader.load('../img/mader.jpg')

const material13 = new THREE.MeshMatcapMaterial()
material13.matcap = matcap
material13.flatShading = true
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 'orange'} ) );


const cube = new THREE.Mesh(geometry,material13)
scene.add(cube);
camara.position.z = 5;
camara.position.x = 0;
camara.position.y = 0;

//animación 
function animate(){
	requestAnimationFrame( animate );
    cube.rotation.y += 0.05;
    cube.rotation.x += 0.05;
    line.rotation.y += 0.05;
    line.rotation.x += 0.05;
	render.render( scene, camara );
    scene.add( line );
}
animate();