<template>
  <div>
    <div class="columns modal-card is-rounded tagContainer" v-if="location">
      <div class="column">
        <b-field label="hosting tag:">
          <b-taginput maxtags="1"></b-taginput>
        </b-field>
      </div>
      <div class="column">
        <b-field label="food tag:">
          <b-taginput maxtags="1"></b-taginput>
        </b-field>
      </div>
      <div class="column">
        <b-field label="leisure tag:">
          <b-taginput maxtags="1"></b-taginput>
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
import data from '../../test/example.json';

export default {
  name: 'TagAdder',
  data() {
    return {
      filteredTags: data,
      isSelectOnly: false,
      tags: [],
    };
  },
  methods: {
    changeLocationState() {
      this.$myStore.commit('change');
    },
    turnTrue() {
      this.$myStore.commit('taggated');
    },
    getFilteredTags(text) {
      this.filteredTags = data.filter(option => {
        return (
          option.user.first_name
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },
  },
  computed: {
    location() {
      return this.$myStore.state.locationAdded;
    },
  },
};
</script>

<style>
.tagContainer {
  background-color: #a5bec4;
  border-radius: 10px;
}
</style>


