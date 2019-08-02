<template>
<div>
  <div class="masterContainer">
    <router-view />
  </div>
  <custom-footer></custom-footer>
</div>
</template>
    
<script>
import Footer from './components/Footer';
import Vue from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

export default {
  name: 'App',
  components: {
    'custom-footer': Footer
    
  },
};
</script>

<style>
.content{
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 96% 4%;
  height: 100vh;

}


  body {
    margin: 0;
  }
</style> 
