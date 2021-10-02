<template>
  <div id="meteor-details">
        <div id="meteor-details-h2" >
            <h2 > {{ meteor.name }} </h2>
            <span @click.self="closeDetails" id="close" > X </span>
            <img draggable="false" src="../assets/Meteor-icon2.png" alt="icon">
        </div>
        <div id="meteor-details-p" >
            <p v-if="meteor.mass" > Mass: {{ meteor.mass }} g </p>
            <p v-if="meteor.year" > Year: {{ meteor.year.slice(0, 4) }}  </p>
            <p v-if="meteor.fall" > Status: {{ meteor.fall }}  </p>
            <p v-if="meteor.recclass" > Class: {{ meteor.recclass }}  </p>
            <p v-if="meteor.geolocation" > Location: latitude {{ meteor.geolocation.latitude }} - longitude {{ meteor.geolocation.longitude }}  </p>
        </div>
        <div class="map">
          <GMapMap
          :center="{ lat: Number(meteor.geolocation.latitude), 
            lng: Number(meteor.geolocation.longitude) }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 250px; height: 250px"
          >
          </GMapMap>
        </div>
  </div>
</template>

<script>

export default {
    props: ["meteor"],
    methods: {
        closeDetails() {
            this.$emit("close")
        },
    },
    mounted() {

      dragElement(document.getElementById("meteor-details"))

      function dragElement(el) {

        let p1 = 0, p2 = 0, p3 = 0, p4 = 0

        if (document.getElementById(el.id)) {
          document.getElementById(el.id).onmousedown = dragMouseDown
        } 

        function dragMouseDown(e) {

          p3 = e.clientX
          p4 = e.clientY

          document.onmouseup = stopDragElement
          document.onmousemove = elementDrag
        }

        function elementDrag(e) {

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

    }
}
</script>

<style scoped>
    #meteor-details {
        position: absolute;
        left: 50%;
        text-align: left;
        z-index: 2;
        cursor: grab;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 20px;
    }

    #meteor-details:active {
        cursor: grabbing;
    }

    #meteor-details-h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        border-top: 1px solid white;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 20px 20px 0 0;
        padding: 0 20px;
    }

    #meteor-details-p {
        padding: 5px 20px;
    }

    #close {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: crimson;
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
    }

    img {
        width: 50px;
        height: 50px;
    }

    .map {
      display: flex;
      justify-content: center;
      padding-bottom: 10px;
    }


</style>