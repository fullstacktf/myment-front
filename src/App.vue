<template>
  <land-page></land-page>
</template>
    
<script>
import Main from './components/Main';
import LandingPage from './components/LandingPage';

export default {
  name: 'App',
  components: {
    'main-page': Main,
    'land-page': LandingPage,
  },
};
</script>
