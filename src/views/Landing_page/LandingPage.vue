<template>
  <div class="landing">
    <div class="leftZone">
      <sign-menu></sign-menu>
    </div>
    <div class="rightZone">
      <anim-logo></anim-logo>
      <router-link to="/short">
        <to-short name="Let's beggin" ></to-short>
      </router-link>
    </div>
  </div>
</template>

<script>
import SignUpMenu from '../../components/SignUpMenu';
import AnimLogo from '../../components/AnimLogo';
import Button from '../../components/Button';

export default {
  name: 'LandingPage',
  components: {
    'sign-menu': SignUpMenu,
    'anim-logo': AnimLogo,
    'short-button': Button,
  },
};
</script>

<style>
.landing {
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100vw;
  height: 100vh;
  background-color: #66838c;
}
.rightZone {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 80% 20%;
}
</style>
