<template>
  <div class="fastLink">{{name}}</div>
</template>

<script>
export default {
  props: {
    name: { //Generate, add or examine
      type: String,
      required: true,
      default: 'generate short'
    },
      route: {
      type: String,
      required: false,
      default: ''
    },

  }, 

  data() {
    return {
   }
  }

  }

  

</script>

<style > 
.fastLink {
    color: white;
    background: black;
    border-radius: 60px;
    width: 100%;
    text-align: center;
}
</style>


