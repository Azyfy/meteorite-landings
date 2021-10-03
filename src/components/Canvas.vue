<template>
  <canvas ref="canvasEl" class="bg"></canvas>
</template>

<script>
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import spaceImg from "../assets/space.jpg"
import moonImg from "../assets/moon.jpg"
import normalImg from "../assets/normal.jpg"

import meteor1 from "../assets/meteorite1.jpg"
import meteor2 from "../assets/meteorite2.jpg"
import meteor3 from "../assets/meteorite3.jpg"
import meteor4 from "../assets/meteorite4.jpg"
import meteor5 from "../assets/meteorite5.jpg"
import meteor6 from "../assets/meteorite6.jpg"
import meteor7 from "../assets/meteorite7.jpg"
import meteor8 from "../assets/meteorite8.jpg"
import meteor9 from "../assets/meteorite9.jpg"
import meteor10 from "../assets/meteorite10.jpg"
import meteor11 from "../assets/meteorite11.jpg"
import meteor12 from "../assets/meteorite12.jpg"
import meteor13 from "../assets/meteorite13.jpg"

import { ref, onMounted } from "vue"

export default {
    setup() {
        const canvasEl = ref(null)

        onMounted(() => {

            const scene = new THREE.Scene()  // scene == container

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 ) // args; field of view, aspect ratio, view frustrum

            const renderer = new THREE.WebGLRenderer({
            canvas: canvasEl.value,
            }) //render

            renderer.setPixelRatio( window.devicePixelRatio )
            renderer.setSize( window.innerWidth, window.innerHeight )
            camera.position.setZ(50)

            renderer.render( scene, camera ) // draw

            //lights
            const pointLight = new THREE.PointLight(0xffffff) //light in all directions
            pointLight.position.set(5, 5, 5)

            const ambientLight = new THREE.AmbientLight(0xffffff) //light everything equaly

            scene.add(pointLight, ambientLight)

            //helpers
            const lightHelper = new THREE.PointLightHelper(pointLight)  //show position of pointlight
            const gridHelper = new THREE.GridHelper(200, 50)

            scene.add(lightHelper, gridHelper)

            const controls = new OrbitControls(camera, renderer.domElement) //update camera position while mouse click dragging 

            //stars
            const addStar = () => {
            const geometry = new THREE.SphereGeometry(0.25, 21, 21)
            const material = new THREE.MeshStandardMaterial( { color: 0xffffff } )
            const star = new THREE.Mesh( geometry, material )

            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

            star.position.set(x, y, z)

            scene.add(star)

            }

            Array(199).fill().forEach(addStar)

            //space background
            const spaceTexture = new THREE.TextureLoader().load(spaceImg)
            scene.background = spaceTexture


            //meteorites
            const meteorites = [meteor1, meteor2, meteor3,
                                meteor4, meteor5, meteor6,
                                meteor7, meteor8, meteor9,
                                meteor10, meteor11, meteor12,
                                meteor13]

            const meteoriteOneTexture = new THREE.TextureLoader().load(meteorites[Math.floor(Math.random() * 13)])
            const meteoriteTwoTexture = new THREE.TextureLoader().load(meteorites[Math.floor(Math.random() * 13)])
            const meteoriteThreeTexture = new THREE.TextureLoader().load(meteorites[Math.floor(Math.random() * 13)])

            const normalOneTexture = new THREE.TextureLoader().load(normalImg)

            function createMeteorite (meteoriteTexture, normalTexture) {

              const meteorite = new THREE.Mesh(
                new THREE.SphereGeometry( Math.floor((Math.random() * 5) +2 ) , 32, 32),
                new THREE.MeshStandardMaterial({
                    map: meteoriteTexture,
                    normalMap: normalTexture
                })
              )

              return meteorite

            }

            function positionMeteoriteOnScene ( meteorite, x, y, z ) {
              meteorite.position.z = z
              meteorite.position.setX(x)
              meteorite.position.y = y

              scene.add(meteorite)
            }

            const meteoriteOne = createMeteorite(meteoriteOneTexture, normalOneTexture)
            const meteoriteTwo = createMeteorite(meteoriteTwoTexture, normalOneTexture)
            const meteoriteThree = createMeteorite(meteoriteThreeTexture, normalOneTexture)

            positionMeteoriteOnScene(meteoriteOne, 15, 0, 10)
            positionMeteoriteOnScene(meteoriteTwo, -10, -10, -25)
            positionMeteoriteOnScene(meteoriteThree, -15, 5, 30)

            const animate = () => {
              requestAnimationFrame(animate)

              meteoriteOne.rotation.x += 0.001
              meteoriteOne.rotation.y += 0.003
              meteoriteOne.rotation.z += 0.001

              meteoriteTwo.rotation.x += 0.003
              meteoriteTwo.rotation.y -= 0.005
              meteoriteTwo.rotation.z += 0.003

              meteoriteThree.rotation.x -= 0.003
              meteoriteThree.rotation.y += 0.003
              meteoriteThree.rotation.z -= 0.003

              camera.position.y += 0.005
              camera.position.x += 0.005
            

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
  z-index: -1;
  top: 0;
  left: 0;
}
</style>
