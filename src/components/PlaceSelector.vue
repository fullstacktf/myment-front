<template>
  <div class="columns">
    <div class="column is-4">
      <div class="select dropdown">
        <select v-model="selectedContinent">
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
        <select :disabled="countries.length == 0" v-model="selectedCountry">
          <option value>Select a City</option>
          <option v-for="(city_obj, city) in countries" :key="city.id">{{city}}</option>
        </select>
      </div>
    </div>
    <div class="column is-4">
      <div class="select dropdown">
        <select :disabled="cities.length == 0" v-model="selectedCity">
          <option value>Select a Zone</option>
          <option v-for="city in cities" :key="city.id">{{city}}</option>
        </select>
      </div>
    </div>
  </div>
</template>


        <div class="cascading-dropdown">
            
            
            
        </div>

<script>
export default {
  name: 'PlaceSelector',
  data() {
    return {
      places: {
        España: {
          Madrid: ['Beijing', 'Shanghai', 'Guangzhou', 'Tianjin'],
          Barcelona: ['New Delhi', 'Mumbai', 'Bangalore', 'Chennai'],
          Zaragoza: ['Tokyo', 'Kyoto', 'Nagoya', 'Hiroshima'],
          La_Laguna: ['Singapore'],
          Santa_Cruz: [
            'Kuala Lumpur',
            'Johor Bahru',
            'George Town',
            'Kota Kinabalu',
          ],
        },
        Alemania: {
          Berlin: [
            'Berlin',
            'Hamburg',
            'Munich',
            'Cologne',
            'Frankfurt',
            'Stuttgart',
          ],
          Hamburg: ['London', 'Birmingham', 'Liverpool', 'Bristol'],
          Munich: ['Paris', 'Marseille', 'Bordeaux', 'Toulouse'],
          Cologne: [],
        },
      },
      countries: [],
      cities: [],
      selectedContinent: '',
      selectedCountry: '',
      selectedCity: '',
    };
  },
  watch: {
    selectedContinent: function() {
      // Clear previously selected values
      this.countries = [];
      this.cities = [];
      this.selectedCountry = '';
      this.selectedCity = '';
      // Populate list of countries in the second dropdown
      if (this.selectedContinent.length > 0) {
        this.countries = this.places[this.selectedContinent];
      }
    },
    selectedCountry: function() {
      // Clear previously selected values
      this.cities = [];
      this.selectedCity = '';
      // Now we have a continent and country. Populate list of cities in the third dropdown
      if (this.selectedCountry.length > 0) {
        this.cities = this.places[this.selectedContinent][this.selectedCountry];
      }
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css">
.selectorWrapper {
  background-color: red;
  width: 20%;
}
</style>
