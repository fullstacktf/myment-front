<template>
  <div class="homeWrapper">
    <div class="homeHeader">
      <div class="columns">
        <div class="column is-2 is-fullwidth">
          <figure class="image is-128x128 centering">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
        <div class="column is-10 centering">
          <news-bar :newNews="hello"></news-bar>
        </div>
      </div>
    </div>
    <div class="homeContainer">
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-6">
          <div class="centerWrapper">
            <map-layer></map-layer>
            <div class="buttons"></div>
          </div>
        </div>
        <div class="column is-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsBar from '../../components/NewsBar';
import MapComponent from '../../components/MapComponent';

export default {
  name: 'Home',
  components: {
    'news-bar': NewsBar,
    'map-layer': MapComponent,
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
  min-height: 85%;
}

.centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

.news {
}
</style>
