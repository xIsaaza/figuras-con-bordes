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
const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );
const textureLoader= new THREE.TextureLoader();
const matcap= textureLoader.load('../img/papel.jpg')

const material13 = new THREE.MeshMatcapMaterial()
material13.matcap = matcap
material13.flatShading = true
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 'orange'} ) );


const mesh = new THREE.Mesh(geometry,material13)
scene.add(mesh);
camara.position.z = 40;
camara.position.x = 0;
camara.position.y = 0;

//animación 
function animate(){
	requestAnimationFrame( animate );
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.x += 0.01;
	render.render( scene, camara );
    scene.add( line );
}
animate();