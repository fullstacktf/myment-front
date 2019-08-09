<template>
  <l-map :center="[-23.752961, -57.854357]" :zoom="6" style="height: 500px;">
    <l-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-layer>
    <v-geosearch :options="geosearchOptions"></v-geosearch>
  </l-map>
</template>

<script>
//};

import * as LeafLet from 'vue2-leaflet';

export default {
  name: 'app',
  components: {
    'l-map': LeafLet.LMap,
    'l-layer': LeafLet.LTileLayer,
  },

  data() {
    return {};
  },
};
</script>

<style>
@import '~leaflet/dist/leaflet.css';
</style>