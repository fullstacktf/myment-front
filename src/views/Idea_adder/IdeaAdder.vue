<template>
  <div class="ideaContainer">
    <div class="columns">
      <div class="column is-5"></div>
      <div class="column is-6"></div>
      <div class="column is-1 void2">
        <router-link to="/home">
          <a class="delete is-medium is-hoverable"></a>
        </router-link>
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column ideaForm is-8 is-halfheight is-vcentered">
        <idea-form></idea-form>
      </div>

      <div class="column void2"></div>
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import IdeaForm from '../../components/IdeaForm';

export default {
  name: 'IdeaAdder',
  components: {
    'side-menu': SidebarMenu,
    'idea-form': IdeaForm,
  },
};
</script>

<style>
.ideaForm {
  padding-top: 3%;
}

.void2 {
  padding-top: 1%;
  display: flex;
  justify-content: right;
}
</style>
