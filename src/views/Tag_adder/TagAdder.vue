<template>
  <div>
    <div class="columns modal-card is-rounded is-fullheight tagContainer" v-if="location">
      <div class="column">
        <b-field label="lodging tags">
          <b-taginput
            v-model="lodgingTag"
            :data="lodging"
            autocomplete
            :allow-new="false"
            field
            icon="label"
            maxtags="1"
            placeholder=">"
          ></b-taginput>
        </b-field>
      </div>
      <div class="column">
        <b-field label="food tag:">
          <b-taginput
            v-model="foodTag"
            :data="food"
            autocomplete
            :allow-new="false"
            field
            icon="label"
            placeholder=">"
            maxtags="1"
            :disabled="isLodgingSelected"
          ></b-taginput>
        </b-field>
      </div>
      <div class="column">
        <b-field label="leisure tag:">
          <b-taginput
            v-model="leisureTag"
            :data="leisure"
            autocomplete
            :ellipsis="true"
            :allow-new="false"
            field
            icon="label"
            placeholder=">"
            maxtags="1"
            :disabled="isFoodSelected"
          ></b-taginput>
        </b-field>
      </div>
      <b-field>
        <p class="control">
          <button class="button is-warning is-fullwidth" @click="turnTrue">lets generate</button>
        </p>
      </b-field>
    </div>
    <div class="warning" v-else>
      <router-link to="/short">
        <button class="button is-large is-danger">WARNING NO LOCATION ADDED</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { VueTags } from 'vue-tags-component';

export default {
  name: 'TagAdder',
  components: {
    'tag-list': VueTags,
  },
  data() {
    return {
      isSelectOnly: false,
      allowNew: false,

      isFoodSelected: true,
      isLodgingSelected: true,
      leisureTag: [],
      lodgingTag: [],
      foodTag: [],
      tags: [],
    };
  },
  watch: {
    lodgingTag: function() {
      console.log(this.lodgingTag);
      this.tags.push(this.lodgingTag[0]);
      this.isLodgingSelected = false;
    },

    foodTag: function() {
      this.isFoodSelected = false;
      console.log(this.foodTag);
      this.tags.push(this.foodTag[0]);
    },
    leisureTag: function() {
      console.log(this.leisureTag);
      this.tags.push(this.leisureTag[0]);
      console.log(this.tags);
      this.$myStore.state.selectedTags = this.tags;
    },
  },
  methods: {
    changeLocationState() {
      this.$myStore.commit('change');
    },
    turnTrue() {
      if (this.tags.length > 0) {
        let country = this.$myStore.state.selectedCountry;
        let city = this.$myStore.state.selectedCity;
        let zone = this.$myStore.state.selectedZone;
        let tags = this.$myStore.state.selectedTags;

        console.log(zone, city, country, tags);
        this.$myStore.commit('taggated');
        this.$myStore.dispatch('getIdeas', zone, city, country, tags);
        this.tags = [];
      } else {
        this.$buefy.toast.open({
          message: 'must add tags ! ',
          type: 'is-large is-warning',
        });
      }
    },
  },
  computed: {
    location() {
      return this.$myStore.state.locationAdded;
    },
    lodging() {
      this.$myStore.dispatch('getLodgingTags');
      return this.$myStore.state.lodgingTags;
    },
    leisure() {
      this.$myStore.dispatch('getLeisureTags');
      return this.$myStore.state.leisureTags;
    },
    food() {
      this.$myStore.dispatch('getFoodTags');
      return this.$myStore.state.foodTags;
    },
  },
};
</script>

<style>
.tagContainer {
  min-height: 80% !important;
  background-color: #a5bec4;
  border-radius: 10px;
}
.dropdown-menu,
.dropdown-content,
.dropdown-item {
  z-index: 1000px !important;
}

.modal .animation-content .modal-card {
  overflow: visible !important;
}
</style>


