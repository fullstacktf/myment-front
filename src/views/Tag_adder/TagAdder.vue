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
            @typing="getFilteredTags"
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
            @typing="getFilteredTags"
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
            @typing="getFilteredTags"
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
    },

    foodTag: function() {
      console.log(this.foodTag);
      this.tags.push(this.foodTag[0]);
    },
    leisureTag: function() {
      console.log(this.leisureTag);
      this.tags.push(this.leisureTag[0]);
      console.log(this.tags);
      this.$myStore.state.
    },
  },
  methods: {
    changeLocationState() {
      this.$myStore.commit('change');
    },
    turnTrue() {
      let zone = this.$myStore.state.selectedZone;
      let tags = this.$myStore.state.selectedTags
      this.$myStore.dispatch('getIdeas',);
      this.$myStore.commit('taggated');
    },
  },
  computed: {
    location() {
      return this.$myStore.state.locationAdded;
    },
    lodging() {
      return this.$myStore.state.lodgingTags;
    },
    leisure() {
      return this.$myStore.state.leisureTags;
    },
    food() {
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


