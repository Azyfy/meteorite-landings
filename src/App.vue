<template>
  <div class="body" ref="body" >
  <Canvas />
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>

  <div class="main">
  <div>
    <h3>Lorem Ipsum</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sapiente voluptatibus non tempora libero unde autem eligendi iste consequuntur? Molestias harum ratione esse pariatur incidunt, ullam temporibus officiis repellendus modi
      <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vel dicta magnam, quod aperiam animi, iste accusantium incidunt et sed exercitationem? Voluptates consectetur reiciendis praesentium iure modi ad blanditiis odio.
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sequi eaque, ut tenetur sed recusandae reiciendis harum a, tempore ipsum commodi. Consequatur quos reprehenderit, ullam impedit unde sint ut at.
    </p>
  </div>

  <div>
    <h3>Lorem Ipsum</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sapiente voluptatibus non tempora libero unde autem eligendi iste consequuntur? Molestias harum ratione esse pariatur incidunt, ullam temporibus officiis repellendus modi
      <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vel dicta magnam, quod aperiam animi, iste accusantium incidunt et sed exercitationem? Voluptates consectetur reiciendis praesentium iure modi ad blanditiis odio.
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sequi eaque, ut tenetur sed recusandae reiciendis harum a, tempore ipsum commodi. Consequatur quos reprehenderit, ullam impedit unde sint ut at.
    </p>
  </div>

  <div>
    <h3>Lorem Ipsum</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sapiente voluptatibus non tempora libero unde autem eligendi iste consequuntur? Molestias harum ratione esse pariatur incidunt, ullam temporibus officiis repellendus modi
      <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vel dicta magnam, quod aperiam animi, iste accusantium incidunt et sed exercitationem? Voluptates consectetur reiciendis praesentium iure modi ad blanditiis odio.
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sequi eaque, ut tenetur sed recusandae reiciendis harum a, tempore ipsum commodi. Consequatur quos reprehenderit, ullam impedit unde sint ut at.
    </p>
  </div>

  <div>
    <h3>Lorem Ipsum</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi sapiente voluptatibus non tempora libero unde autem eligendi iste consequuntur? Molestias harum ratione esse pariatur incidunt, ullam temporibus officiis repellendus modi
      <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vel dicta magnam, quod aperiam animi, iste accusantium incidunt et sed exercitationem? Voluptates consectetur reiciendis praesentium iure modi ad blanditiis odio.
      <br>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sequi eaque, ut tenetur sed recusandae reiciendis harum a, tempore ipsum commodi. Consequatur quos reprehenderit, ullam impedit unde sint ut at.
    </p>
  </div>
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

.main {
  position: absolute;
  width: 35%;
}

</style>
