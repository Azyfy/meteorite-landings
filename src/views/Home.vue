<template>
  <div class="home">
   <h1>HOME</h1>

   <div id="meteor-container" >
      <div id="meteor-container-h2" >
        <h2 >Meteorites</h2>
        <p>draggable</p>
      </div>
      <div v-if="meteorites.length" >
        <div v-for="meteor in meteorites" :key="meteor.id" class="meteor-list" >
                <img class="m-icon" src="../assets/Meteor-icon.png" alt="icon">
                <h3> {{ meteor.name }} </h3>
        </div>
      </div>

      <div v-else class="loader" >
      </div>

    </div>



  </div>
</template>

<script>
import getMeteorites from "../services/getMeteorites"

import { onMounted } from "vue"

export default {
  name: 'Home',
  components: {
    
  },
  setup() {

    const { meteorites, load } = getMeteorites()
    load()

    onMounted(() => {

      dragElement(document.getElementById("meteor-container"))

      function dragElement(el) {
        let p1 = 0, p2 = 0, p3 = 0, p4 = 0

        if (document.getElementById(el.id + "-h2")) {
          document.getElementById(el.id + "-h2").onmousedown = dragMouseDown
        } 

        function dragMouseDown(e) {
          e = e || window.event
          e.preventDefault()

          p3 = e.clientX
          p4 = e.clientY

          document.onmouseup = stopDragElement
          document.onmousemove = elementDrag
        }

        function elementDrag(e) {
          e = e || window.event
          e.preventDefault()

          p1 = p3 - e.clientX
          p2 = p4 - e.clientY
          p3 = e.clientX
          p4 = e.clientY

          el.style.top = (el.offsetTop - p2) + "px"
          el.style.left = (el.offsetLeft - p1) + "px"
        }

        function stopDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }

    })

    return { meteorites }
  },
}
</script>

<style scoped>
h1 {
  position: relative;
  z-index: 1;
  color: yellow;
}

.loader {
  margin: auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.m-icon {
  width: 25px;
  height: 25px;
  margin-left: 10px;
}

#meteor-container {
  display: inline-block;
  position: absolute;
  z-index: 1;
  width: 300px;
  left: 5px;
}

.meteor-list {
  display: flex;
  border: 1px solid red;
  background-color: #3498db;
  height: 50px;
  gap: 10px;
  align-items: center;

}

</style>
