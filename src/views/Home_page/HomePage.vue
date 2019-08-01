<template>
  <div>
    <div class="welcome">
      <img src="public/assets/M.png" alt="myment-logo" class="logo" />
      <span>Welcome to your plan!</span>
    </div>
    <div class="bigContainer">
      <div class="containerSide">
        <side-menu></side-menu>
      </div>
      <div class="containerCenter"></div>
    </div>
  </div>
</template>

<script>
import Menu from '../../components/SidebarMenu';
import Login from '../../components/Login';
import SignIn from '../../components/Signin';
export default {
  name: 'Main',
  components: {
    'log-in': Login,
    'sign-in': SignIn,
    'side-menu': Menu,
  },
};
</script>

<style>
.logo {
  width: 150px;
  height: 150px;
}
.bigContainer {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
}
.containerCenter {
  width: 100%;
  height: 100%px;
  background-color: black;
}
.containerSide {
  min-width: 10px;
  min-height: 10px;
  background-color: #79f0a5;
}
.welcome {
  font-family: roboto, sans-serif;
}
</style>
