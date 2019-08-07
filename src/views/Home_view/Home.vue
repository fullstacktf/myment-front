<template>
  <div class="homeWrapper">
    <div class="homeHeader">
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column"></div>
      </div>
    </div>
    <div class="homeContainer"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
.homeWrapper {
  display: grid;
  grid-template-rows: 10% 90%;
}
</style>
