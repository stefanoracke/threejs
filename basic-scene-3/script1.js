// first we go to the scene

const scene = new THREE.Scene()


// Then we need to create a shape or a geometry and a Material
const boxgeometry = new THREE.BoxGeometry(1,1,1)
const boxmaterial = new THREE.MeshBasicMaterial({color: '#ff0000'})

// then we need to mesh the two values

const boxmesh = new THREE.Mesh(boxgeometry,boxmaterial)

scene.add(boxmesh)

console.log(boxmesh)




// then we need a camera to position

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight)
scene.add(camera)
camera.position.z =  3  
camera.position.x =  1


// create renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)

renderer.render(scene,camera)