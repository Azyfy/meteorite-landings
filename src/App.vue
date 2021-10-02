<template>
  <div  >
   <!-- <Canvas /> -->
   <Canvas /> 
    <Meteorite />
  </div>
</template>

<script>
import Canvas from "./components/Canvas.vue"
import Meteorite from "./components/Meteorite.vue"

export default {
  components: {
    Canvas,
    Meteorite
  },
  setup() {
    
  }
}
</script>

<style>
#app {
  font-family: serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(250, 250, 92);
  
}

body {
  background-color: black;
}

</style>
