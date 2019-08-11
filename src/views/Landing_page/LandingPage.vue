<template>
  <div class="columns is-centered landingParent">
    <sign-menu></sign-menu>

    <main id="page-wrap">
      <div class="columns">
        <div class="column is-6">
          <div class="columnContent">
            <figure class="image is-square">
              <img src="../../assets/giphy.gif" />
            </figure>
            <h1 class="title is-1 is-white">M Y M E N T</h1>
          </div>
        </div>
        <div class="column is-6">
          <div class="sloganWrapper">
            <h1 class="title is-1 is-white">Start your moment right now</h1>

            <p>Whe are here to make the heavy stuff and let you dream how is it going to be</p>
            <p>
              Discover a new planning service
              in the next city you are going to visit !
            </p>
            <router-link to="/short">
              <a class="button main is-large is-fullwidth is-warning">LET'S FLY</a>
            </router-link>
          </div>
        </div>
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
h1 {
  color: white !important;
}
p {
  font-size: 25px;
  text-align: left;
  opacity: 0.6;
}

.landingParent {
  background-image: url("../../../public/assets/landing_bg.svg"),
}

.image {
  width: 700px;
  height: 700px;
}
.button.main {
  width: 600px !important;
}
.sloganWrapper {
  display: grid;
  grid-template-rows: 40% 20% 20% 20%;
  align-items: end;
  background-image: url();
  color: white;
  height: 100%;
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
