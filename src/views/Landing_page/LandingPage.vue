<template>
  <div class="landing">
    <div class="leftZone">
      <log-menu></log-menu>
    </div>
    <div class="rightZone">
      <anim-logo></anim-logo>
      <short-button name="Let's beggin" customWidth="250px" customHeight="100px" action = "generate"></short-button>
    </div>
  </div>
</template>

<script>
import LoginMenu from '../../components/LoginMenu';
import AnimLogo from '../../components/AnimLogo';
import Button from '../../components/Button';

export default {
  name: 'LandingPage',
  components: {
    'log-menu': LoginMenu,
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
}
.rightZone {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 80% 20%;
}
</style>
