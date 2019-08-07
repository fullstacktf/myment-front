<template>
  <l-map :center="[-23.752961, -57.854357]" :zoom="6" style="height: 500px;" :options="mapOptions">
    <l-choropleth-layer
      :data="pyDepartmentsData"
      titleKey="department_name"
      idKey="department_id"
      :value="value"
      :extraValues="extraValues"
      geojsonIdKey="dpto"
      :geojson="paraguayGeojson"
      :colorScale="colorScale"
    >
      <template slot-scope="props">
        <l-info-control
          :item="props.currentItem"
          :unit="props.unit"
          title="Department"
          placeholder="Hover over a department"
        />
        <l-reference-chart
          title="Girls school enrolment"
          :colorScale="colorScale"
          :min="props.min"
          :max="props.max"
          position="topright"
        />
      </template>
    </l-choropleth-layer>
  </l-map>
</template>

<script>
import { LMap } from 'vue2-leaflet';
import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth';
import 'leaflet/dist/leaflet.css';
// Register these components in the components

export default {
  name: 'app',
  components: {
    LMap,
    'l-info-control': InfoControl,
    'l-reference-chart': ReferenceChart,
    'l-choropleth-layer': ChoroplethLayer,
  },
};
</script>

<style>
</style>