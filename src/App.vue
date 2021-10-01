<template>
  <div  >
   <!-- <Canvas /> -->
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>

 

  <router-view/>
  </div>
</template>

<script>
import Canvas from "./components/Canvas.vue"

export default {
  components: {
    Canvas
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
