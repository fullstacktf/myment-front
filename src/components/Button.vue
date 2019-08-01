<template>
  <button class="Button" :style="style">{{name}}</button>
</template>

<script>
export default {
  props: {
    name: {
      //Generate, add or examine
      type: String,
      required: true,
      default: 'generate',
    },
    route: {
      type: String,
      required: false,
      default: '',
    },
    customWidth: {
      type: String,
      required: false,
      default: '100px',
    },
    customHeight: {
      type: String,
      required: false,
      default: '70px',
    },
  },
  name: 'Button',
  data() {
    return {
      cWidth: this.customWidth,
      cHeight: this.customHeight,
    };
  },
  methods: {
    Redirect() {},
  },
  computed: {
    style() {
      return 'width: ' + this.cWidth + ';' + 'height: ' + this.cHeight + ';';
    },
  },
};
</script>

<style >
.Button {
  color: white;
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
  text-align: center;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  box-shadow: 2px 2px #454647;
}
.Button:hover {
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

  
