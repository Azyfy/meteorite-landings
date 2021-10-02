<template>
  <div  >
   <!-- <Canvas /> -->

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
