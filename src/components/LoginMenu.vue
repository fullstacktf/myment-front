<template>
  <div class="menu">
    <log-in></log-in>
    <sign-in></sign-in>
    <main-button name="main page" customWidth="100px" customHeight="30px"></main-button>
  </div>
</template>

<script>
import Login from './Login';
import Signin from './Signin';
import ToMain from './Button';
export default {
  name: 'LoginMenu',
  components: {
    'log-in': Login,
    'sign-in': Signin,
    'main-button': ToMain,
  },
};
</script>

<style>
.menu {
  display: flex;
  justify-content: left;
  align-items: left;
  width: 20vw;
  height: 100vh;
  background-color: #66838c;
  border: 4px solid black;
}
</style>
