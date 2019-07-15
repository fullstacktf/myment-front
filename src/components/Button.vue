<template>
    <button class="Button" > {{funcionality}}
    </button>
</template>

<script>
export default {

  props: {
    funcionality: { //Generate, add or examine
      type: String,
      required: true,
      default: 'generate'
    },
      route: {
      type: String,
      required: false,
      default: ''
    },

  },
  name: 'Button', 
  data() {
    return {
   }
  },
  methods: {
    Redirect(){}
  }

  }

</script>

<style > 
.Button {
  color:white;
  background: #454647;
  background-image: -webkit-linear-gradient(top, #454647, #000000);
  background-image: -moz-linear-gradient(top, #454647, #000000);
  background-image: -ms-linear-gradient(top, #454647, #000000);
  background-image: -o-linear-gradient(top, #454647, #000000);
  background-image: linear-gradient(to bottom, #454647, #000000);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  box-shadow: 2px 2px #454647;

}
.Button:hover{
  color: white;
  background: #061636;
  background-image: -webkit-linear-gradient(top, #061636, #092038);
  background-image: -moz-linear-gradient(top, #061636, #092038);
  background-image: -ms-linear-gradient(top, #061636, #092038);
  background-image: -o-linear-gradient(top, #061636, #092038);
  background-image: linear-gradient(to bottom, #061636, #092038);
  text-decoration: none;  
}

</style>

  
