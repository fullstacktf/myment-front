<template>
  <div class="menu">
    <log-in></log-in>
    <sign-in></sign-in>
  </div>
</template>

<script>
import Login from './Login';
import Signin from './Signin';

export default {
  name: 'LoginMenu',
  components: {
    'log-in': Login,
    'sign-in': Signin,
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
