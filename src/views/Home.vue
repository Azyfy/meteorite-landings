<template>
  <div class="home">
   <h1>HOME</h1>

   <div v-if="meteorites.length" >
    <div v-for="met in meteorites" :key="met.id" >
          <p> {{ met.name }} </p>
      </div>
    </div>

    <div v-else class="loader" >
    </div>

  </div>
</template>

<script>
import getMeteorites from "../services/getMeteorites"

export default {
  name: 'Home',
  components: {
    
  },
  setup() {

    const { meteorites, load } = getMeteorites()
    load()

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
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
