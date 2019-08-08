<template>
  <div class="homeWrapper">
    <div class="homeHeader">
      <mobile-menu right class="is-hidden-desktop"></mobile-menu>

      <div class="columns">
        <div class="column is-2 is-fullwidth is-gapless">
          <figure class="image is-128x128 centering is-hidden-tablet">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
        <div class="column is-9 centering is-gapless">
          <news-bar :newNews="hello"></news-bar>
        </div>
        <div class="column is-1 is-hidden-mobile">
          <figure class="image is-128x128 centering">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
      </div>
    </div>

    <div class="homeContainer">
      <div id="app">
        <desktop-menu left class="is-hidden-mobile"></desktop-menu>

        <main id="page-wrap">
          <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-8">
              <div class="centerWrapper">
                <map-layer></map-layer>

                <div class="columns buttonsWrapper is-hidden-mobile">
                  <div class="column is-4">
                    <button class="button is-black is-large is-fullwidth">ITINERARIES</button>
                  </div>
                  <div class="column is-4">
                    <button class="button is-black is-large is-fullwidth">ADD IDEAS</button>
                  </div>
                  <div class="column is-4">
                    <button class="button is-black is-large is-fullwidth">EXPLORE</button>
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

export default {
  name: 'Home',
  components: {
    'news-bar': NewsBar,
    'map-layer': MapComponent,
    'desktop-menu': Push,
    'mobile-menu': Slide,
  },
};
</script>

<style>
.homeHeader {
  display: flex;
  min-height: 15%;
  background-color: #cae0cf;
  box-shadow: -40px -40px black;
}

.homecontainer {
  max-width: 100%;
  min-height: 85%;
}

.buttonsWrapper {
  padding-top: 3%;
}

.centerWrapper {
  margin: 1%;
  margin-top: 3%;
  min-width: 45.5%;
  width: 80vw;
  padding: 30px;
  justify-content: center;
  background-color: rgb(146, 207, 177);
  border-radius: 10px;
}

.centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
