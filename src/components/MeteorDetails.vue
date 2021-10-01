<template>
  <div class="meteor-details">
      <h2> {{ meteor.name }} </h2>
      <p> Mass: {{ meteor.mass }} g </p>
      <p> Year: {{ meteor.year.slice(0, 10) }}  </p>
      <p> Status: {{ meteor.fall }}  </p>
      <p> Class: {{ meteor.recclass }}  </p>
      <p> Location: latitude {{ meteor.geolocation.latitude }} - longitude {{ meteor.geolocation.longitude }}  </p>
        
  </div>
</template>

<script>
export default {
    props: ["meteor"],
}
</script>

<style>
    .meteor-details {
        position: absolute;
        left: 50%;
        margin: auto;
        z-index: 2;
        color: red;
    }
</style>