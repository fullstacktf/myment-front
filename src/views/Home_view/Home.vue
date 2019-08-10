<template>
  <div class="homeWrapper">
    <div class="homeHeader">
      <mobile-menu right class="is-hidden-desktop"></mobile-menu>

      <div class="columns">
        <div class="column is-2 is-fullwidth is-gapless">
          <router-link to="/">
            <figure class="image is-128x128 centering is-hidden-tablet">
              <img src="../../../public/assets/myment-logo.png" />
            </figure>
          </router-link>
        </div>
        <div class="column is-9 centering is-gapless">
          <news-bar :newNews="hello"></news-bar>
        </div>
        <div class="column is-1 is-hidden-mobile">
          <router-link to="/">
            <figure class="image is-128x128 centering">
              <img src="../../../public/assets/myment-logo.png" />
            </figure>
          </router-link>
        </div>
      </div>
    </div>

    <div class="homeContainer">
      <div id="app">
        <desktop-menu left class="is-hidden-mobile">
          <quick-menu></quick-menu>
        </desktop-menu>

        <main id="page-wrap">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-8">
              <div class="centerWrapper">
                <map-layer></map-layer>

                <div class="columns buttonsWrapper is-hidden-mobile">
                  <div class="column is-4">
                    <router-link to="/short">
                      <button class="button is-black is-large is-fullwidth">ITINERARIES</button>
                    </router-link>
                  </div>
                  <div class="column is-4">
                    <router-link to="idea-add">
                      <button class="button is-black is-large is-fullwidth">ADD IDEAS</button>
                    </router-link>
                  </div>
                  <div class="column is-4">
                    <router-link to="/">
                      <button class="button is-black is-large is-fullwidth">EXPLORE</button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-1 is-hidden-mobile"></div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import NewsBar from '../../components/NewsBar';
import MapComponent from '../../components/MapComponent';
import { Slide, Push } from 'vue-burger-menu';
import QuickActionsMenu from '../../components/QuickActionsMenu';

export default {
  name: 'Home',
  components: {
    'news-bar': NewsBar,
    'map-layer': MapComponent,
    'desktop-menu': Push,
    'mobile-menu': Slide,
    'quick-menu': QuickActionsMenu,
  },
};
</script>

<style>
.homeHeader {
  display: flex;
  min-height: 15%;
  background-color: #64557f;
  box-shadow: -40px -40px black;
}

.homecontainer {
  max-width: 100%;
  min-height: 85%;
}

.buttonsWrapper {
  margin-left: 5px;
  padding-top: 3%;
}

.centerWrapper {
  margin: 1%;
  margin-top: 3%;
  min-width: 45.5%;
  width: 80vw;
  padding: 30px;
  justify-items: center;
  align-items: center;
  background-color: rgb(146, 207, 177);
  border-radius: 10px;
}

.centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bm-menu {
  background-color: #8e78c5 !important ;
  height: 100% !important;
  justify-self: center;
}
</style>
