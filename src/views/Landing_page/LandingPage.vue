<template>
  <div class="columns is-centered landingParent">
    <div class="mustBeOnTop">
      <sign-menu></sign-menu>
    </div>
    <main id="page-wrap">
      <parallax-container class="childWrapper">
        <parallax-element :parallaxStrength="10" :type="'depth'">
          <div class="columns">
            <div class="column is-6">
              <div class="columnContent">
                <parallax-container>
                  <parallax-element :parallaxStrength="10" :type="'depth'">
                    <div class="imageWrappergif">
                      <figure class="image is-square">
                        <img src="../../assets/giphy.gif" />
                      </figure>
                    </div>
                  </parallax-element>
                </parallax-container>

                <parallax-container>
                  <parallax-element :parallaxStrength="10" :type="'depth'">
                    <h1 class="title is-1 is-white myment">M Y M E N T</h1>
                  </parallax-element>
                </parallax-container>
              </div>
            </div>
            <div class="column is-6">
              <div class="sloganWrapper">
                <parallax-container>
                  <parallax-element :parallaxStrength="20" :type="'depth'">
                    <h1 class="title is-2 is-white">Start using the best itinerary generator</h1>
                  </parallax-element>
                </parallax-container>
                <parallax-container>
                  <parallax-element :parallaxStrength="15" :type="'depth'">
                    <h2
                      class="subtitle is-4 is-white"
                    >Discover that city where you have neber been, now easier with myment, just by adding your preferences. Start now quicker than ever and without loggin.</h2>
                  </parallax-element>
                </parallax-container>
                <parallax-container>
                  <parallax-element :parallaxStrength="15" :type="'depth'">
                    <router-link to="/short">
                      <a
                        class="button main is-large is-fullwidth is-warning is-rounded is-focused"
                      >LET'S GO FOR IT</a>
                    </router-link>
                  </parallax-element>
                </parallax-container>
              </div>
            </div>
          </div>
        </parallax-element>
      </parallax-container>
    </main>
  </div>
</template>

<script>
import SignUpMenu from '../../components/SignUpMenu';
import Parallax from 'vue-parallaxy';

export default {
  name: 'LandingPage',
  components: {
    'sign-menu': SignUpMenu,
    'parallax-bg': Parallax,
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
}

.imageWrappergif {
  z-index: 0;
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
  height: 100%;
  background-image: url('../../../src/assets/back_back.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
#page-wrap {
  z-index: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.childWrapper {
  z-index: 0;
  width: 100%;
  min-height: 100%;
  background-image: url('../../../src/assets/back_front.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.mustBeOnTop {
  z-index: 10000;
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
