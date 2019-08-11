<template>
  <div class="columns is-centered landingParent">
    <sign-menu></sign-menu>

    <main id="page-wrap">
      <div class="columns childWrapper">
        <div class="column is-6">
          <div class="columnContent">
            <div class="imageWrappergif">
              <figure class="image is-square">
                <img src="../../assets/giphy.gif" />
              </figure>
            </div>
            <h1 class="title is-1 is-white myment">M Y M E N T</h1>
          </div>
        </div>
        <div class="column is-6">
          <div class="sloganWrapper">
            <h1 class="title is-2 is-white">Start using the best itinerary generator</h1>
            <h2
              class="subtitle is-4 is-white"
            >Discover that city where you have neber been, now easier with myment, just by adding your preferences. Start now quicker than ever and without loggin.</h2>
            <router-link to="/short">
              <a
                class="button main is-large is-fullwidth is-warning is-rounded is-focused"
              >LET'S GO FOR IT</a>
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
h1,
h2 {
  margin-top: 10px;
  color: white !important;
}
p {
  padding: 2px !important;

  margin: 0px !important;
  font-size: 25px;
  text-align: left;
  opacity: 0.6;
  border: 1px solid white;
}

.imageWrappergif {
  margin-bottom: 100px;
}
.line-style {
  background-color: white !important;
  color: white !important;
}
.myment {
  margin-top: -70px;
}
.landingParent {
  width: 100%;
  height: 105%;
  background-image: url('../../../src/assets/back_back.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
#page-wrap {
  width: 100%;
  height: 100%;
  background-image: url('../../../src/assets/back_front.svg');
  background-size: cover;
  background-repeat: no-repeat;
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
  width: 65%;
  margin-left: 100px;
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
