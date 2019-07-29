<template>
  <div class="container">
    <log-menu></log-menu>
    <logo-anim></logo-anim>
    <to-short></to-short>
  </div>
</template>

<script>
import LogMenu from './LogMenu';
import LogoAnimation from './LogoAnimation';
import ToShort from './ToShort';

export default {
  name: 'LandingPage',
  components: {
    'log-menu': LogMenu,
    'logo-anim': LogoAnimation,
    'to-short': ToShort,
  },
};
</script>

<style>
</style>
