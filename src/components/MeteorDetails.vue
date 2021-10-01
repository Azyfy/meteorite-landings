<template>
  <div id="meteor-details">
      <div id="meteor-details-h2" >
           <h2 > {{ meteor.name }} </h2>
      </div>
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
        margin: auto;
        z-index: 2;
        color: red;
    }

    #meteor-details-h2 {
        border: 1px solid purple;
    }


</style>