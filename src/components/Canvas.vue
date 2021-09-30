<template>
  <canvas ref="canvasEl" class="bg"></canvas>
</template>

<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import spaceImg from "../assets/space.jpg"
import moonImg from "../assets/moon.jpg"
import normalImg from "../assets/normal.jpg"

import { ref, onMounted } from "vue"

export default {
  setup() {
    const canvasEl = ref(null)

    onMounted(() => {
        console.log("here", canvasEl.value) 

         const scene = new THREE.Scene()  // scene == container

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 ) // args; field of view, aspect ratio, view frustrum

        const renderer = new THREE.WebGLRenderer({
          canvas: canvasEl.value,
        }) //render

        renderer.setPixelRatio( window.devicePixelRatio )
        renderer.setSize( window.innerWidth, window.innerHeight )
        camera.position.setZ(30)

        renderer.render( scene, camera ) // draw

        const geometry = new THREE.TorusGeometry( 10, 3, 16, 100)
        const material = new THREE.MeshStandardMaterial( { color: 0xDD6347 }) //wrapping paper for object; meshbasicmaterial with wireframe prop true
        const torus = new THREE.Mesh( geometry, material )

        scene.add(torus)

        const pointLight = new THREE.PointLight(0xffffff) //light in all directions
        pointLight.position.set(5, 5, 5)

        const ambientLight = new THREE.AmbientLight(0xffffff) //light everything equaly

        scene.add(pointLight, ambientLight)

        const lightHelper = new THREE.PointLightHelper(pointLight)  //show position of pointlight
        const gridHelper = new THREE.GridHelper(200, 50)

        scene.add(lightHelper, gridHelper)

        const controls = new OrbitControls(camera, renderer.domElement) //update camera position while mouse click dragging 

        const addStar = () => {
          const geometry = new THREE.SphereGeometry(0.25, 24, 24)
          const material = new THREE.MeshStandardMaterial( { color: 0xffffff } )
          const star = new THREE.Mesh( geometry, material )

          const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

          star.position.set(x, y, z)

          scene.add(star)

        }

        Array(200).fill().forEach(addStar)

        const spaceTexture = new THREE.TextureLoader().load(spaceImg)
        scene.background = spaceTexture

        const moonTexture = new THREE.TextureLoader().load(moonImg)
        const normalTexture = new THREE.TextureLoader().load(normalImg)

        const moon = new THREE.Mesh(
          new THREE.SphereGeometry(3, 32, 32),
          new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: normalTexture
          })
        )

        scene.add(moon)

        const animate = () => {
          requestAnimationFrame(animate)

          torus.rotation.x += 0.01
          torus.rotation.y += 0.005
          torus.rotation.z += 0.01

          controls.update()

          renderer.render( scene, camera )
        }

        animate()

      })
    


    

    return { canvasEl }
  },
}
</script>

<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
