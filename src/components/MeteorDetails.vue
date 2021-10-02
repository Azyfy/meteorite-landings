<template>
  <div id="meteor-details">
        <div id="meteor-details-h2" >
            <h2 > {{ meteor.name }} </h2>
            <span @click.self="closeDetails" id="close" > X </span>
            <img draggable="false" src="../assets/Meteor-icon2.png" alt="icon">
        </div>
        <div id="meteor-details-p" >
            <p> Mass: {{ meteor.mass }} g </p>
            <p> Year: {{ meteor.year.slice(0, 4) }}  </p>
            <p> Status: {{ meteor.fall }}  </p>
            <p> Class: {{ meteor.recclass }}  </p>
            <p> Location: latitude {{ meteor.geolocation.latitude }} - longitude {{ meteor.geolocation.longitude }}  </p>
        </div>
        <GMapMap
          :center="{ lat: Number(meteor.geolocation.latitude), 
            lng: Number(meteor.geolocation.longitude) }"
          :zoom="7"
          map-type-id="terrain"
          style="width: 250px; height: 250px"
        >
        </GMapMap>
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

<style>
    #meteor-details {
        position: absolute;
        left: 50%;
        text-align: left;
        z-index: 2;
        color: red;
        cursor: grab;
    }

    #meteor-details:active {
        cursor: grabbing;
    }

    #meteor-details-h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        border: 1px solid purple;
    }

    #meteor-details-p {
        padding: 5px;
    }

    #close {
        position: absolute;
        top: -5px;
        right: -5px;
        color: white;
        background-color: crimson;
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
    }

    img {
        width: 50px;
        height: 50px;
    }


</style>