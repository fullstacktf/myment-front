<template>
  <div class="columns is-centered">
    <div class="column is-one-fifth">
      <sign-menu></sign-menu>
    </div>
    <div class="column is-7">
      <div class="columnContent">
        <figure class="image is-square">
          <img src="../../../public/assets/giphy.gif" />
        </figure>
        <router-link to="/short">
          <a class="button main is-large is-fullwidth is-warning">LET'S FLY</a>
        </router-link>
      </div>
    </div>
    <div class="column"></div>
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
.image {
  width: 700px;
  height: 700px;
}
.button.main {
  width: 600px !important;
}
.columnContent {
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  justify-items: center;
  align-content: space-around;
  width: 100%;
}
</style>
