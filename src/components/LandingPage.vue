<template>
  <div class="landing">
    <div class="leftZone">
      <log-menu></log-menu>
    </div>
    <div class="rightZone">
      <anim-logo></anim-logo>
      <to-short name="Let's beggin" customWidth="250px" customHeight="100px"></to-short>
    </div>
  </div>
</template>

<script>
import LoginMenu from './LoginMenu';
import AnimLogo from './AnimLogo';
import ToShort from './Button';

export default {
  name: 'LandingPage',
  components: {
    'log-menu': LoginMenu,
    'anim-logo': AnimLogo,
    'to-short': ToShort,
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
