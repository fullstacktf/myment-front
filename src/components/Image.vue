<template>
  <div class="imageContainer">
    <img class = "map" src=source alt="an example map image"/>
  </div>
</template>

<script>


export default {
  props: {
    name: { //Generate, add or examine
      type: String,
      required: true,
      default: 'generate short'
    },
    source: { //Generate, add or examine
      type: String,
      required: true,
      default: "../assets/map.jpg"
    },
  }, 

  data() {
    return {

   }
  }

  }
  

</script>

<style scoped > 
.imageContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  
}
  
  img{
    box-shadow: 7px 7px 10px black, -7px -7px 10px black
;
     }
 .map {
  width: 80%;
  height: 90%;
 }

</style>


