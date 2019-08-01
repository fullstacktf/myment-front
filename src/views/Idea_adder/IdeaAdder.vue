<template>
  <div class="ideaContainer">
    <h1>idea</h1>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';

export default {
  name: IdeaAdder,
  components: {
    'side-menu': SidebarMenu,
  },
};
</script>

<style>
.ideaContainer {
  width: 100vw;
  height: 100vh;
  background: gray;
}
</style>
