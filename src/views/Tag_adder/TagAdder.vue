<template>
  <div>
    <div class="columns modal-card is-rounded tagContainer" v-if="locationAdded">
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
          <button class="button is-warning is-fullwidth">lets generate</button>
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
export default {
  name: 'TagAdder',
  data() {
    return {
      locationAdded: true,
    };
  },
};
</script>

<style>
.tagContainer {
  background-color: #a5bec4;
  border-radius: 10px;
}
</style>
