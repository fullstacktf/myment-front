<template>
  <div class="columns is-centered">
    <sign-menu></sign-menu>

    <main id="page-wrap">
      <div class="columnContent">
        <figure class="image is-square">
          <img src="../../../public/assets/giphy.gif" />
        </figure>
        <router-link to="/short">
          <a class="button main is-large is-fullwidth is-warning">LET'S FLY</a>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import SignUpMenu from '../../components/SignUpMenu';

export default {
  name: 'LandingPage',
  components: {
    'sign-menu': SignUpMenu,
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
