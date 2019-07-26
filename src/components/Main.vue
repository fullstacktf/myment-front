<template>
  <div>
    <div class="welcome">
      <span>Welcome to your plan!</span>
    </div>
    <div class="container">
      <Logged-Header></Logged-Header>
      <chachi-button name = "random"></chachi-button>
      <chachi-button name = "generate"></chachi-button>
      <chachi-button name = "loquequieras"></chachi-button>
      <single-element name= "hola"> </single-element>
    </div>
  </div>
</template>


<script>
import chachiHeader from './LoggedHeader';
import  Button from "./Button";
import  Single from "./SingleMenuLink";



export default {
  name: "Main",
    components: {
    "Logged-Header": chachiHeader,
    "chachi-button": Button,
    "single-element": Single,


  }
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  background-color: #255060;
}
.logo {
  width: 150px;
  height: 150px;
}
.container {
  width: 990px;
  height: 900px;
  background-color: #79f0a5;
}
.welcome {
  font-family: roboto, sans-serif;
}
</style>
