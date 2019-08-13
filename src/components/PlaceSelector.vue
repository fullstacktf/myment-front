<template>
  <div class="columns">
    <div class="column is-4">
      <div class="select dropdown">
        <select v-model="selectedCountry">
          <option value>Select a Country</option>
          <option
            v-for="(country_obj, country) in places"
            :value="country"
            :key="country.id"
          >{{country}}</option>
        </select>
      </div>
    </div>
    <div class="column is-4">
      <div class="select dropdown">
        <select :disabled="cities.length == 0" v-model="selectedCity">
          <option value>Select a City</option>
          <option v-for="(city_obj, city) in cities" :key="city.id">{{city}}</option>
        </select>
      </div>
    </div>
    <div class="column is-4">
      <div class="select dropdown">
        <select :disabled="zones.length == 0" v-model="selectedZone">
          <option value>Select a Zone</option>
          <option v-for="zone in zones" :key="zone.id">{{zone}}</option>
        </select>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'PlaceSelector',
  data() {
    return {
      places: {
        España: {
          'La Laguna': [
            'Parque Rural de Anaga',
            'Vega de las mercedes',
            'Centro Historico',
          ],
          'Santa Cruz': ['La Gallega', 'Añaza', 'Llano del Moro'],
        },
      },
      cities: [],
      zones: [],
      selectedCountry: '',
      selectedCity: '',
      selectedZone: '',
      key: 0,
    };
  },
  watch: {
    selectedCountry: function() {
      // Clear previously selected values

      this.cities = [];
      this.selectedCity = '';
      this.selectedZone = '';
      // Populate list of countries in the second dropdown
      if (this.selectedCountry.length > 0) {
        console.log('entra en el if');
        console.log(this.selectedCountry);
        this.cities = this.places[this.selectedCountry];
        this.$myStore.dispatch('sendCountry', this.selectedCountry);
      }
    },
    selectedCity: function() {
      // Clear previously selected values
      this.zones = [];
      this.selectedZone = '';
      // Now we have a continent and country. Populate list of cities in the third dropdown
      if (this.selectedCity.length > 0) {
        this.zones = this.places[this.selectedCountry][this.selectedCity];
        this.$myStore.dispatch('sendCity', this.selectedCity);
      }
    },
    selectedZone: function() {
      console.log(this.selectedZone);
      this.$myStore.dispatch('sendZone', this.selectedZone);
    },
  },
  computed: {
    //selectedZone: function() {
    //  console.log(this.selectedZone);
    //  this.$myStore.dispatch('sendZone', this.selectedZone);
    //},
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
.selectorWrapper {
  background-color: red;
  width: 20%;
}
</style>
