<template>
  <div class="masterContainer">
    <router-view />
  </div>
</template>

<script>
import Footer from './components/Footer';
import Vue from 'vue';
import VueSidebarMenu from 'vue-sidebar-menu';
Vue.use(VueSidebarMenu);

export default {
  name: 'App',
  components: {
    'custom-footer': Footer,
  },
};
</script>

<style>
.masterContainer {
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 96% 4%;
  background-color: rgb(73, 80, 116);
}

body {
  margin: 0;
}
</style>
