
<template>
  <div class="actionsWrapper">
    <div class="imageWrapp">
      <figure class="image is-centered is-128x128 is-block">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>

      <div class="column is-12 userCard is-fullwidth">
        <b-modal :active.sync="isComponentModalActive" has-modal-card full-screen>
          <user-card></user-card>
        </b-modal>
        <button
          class="button is-block is-small is-info is-fullwidth is-centered"
          @click="isComponentModalActive=true"
        >profile</button>
      </div>
    </div>

    <button class="button is-large is-black is-rounded is-centered">share moment</button>
  </div>
</template>

<script>
import UserCard from './UserCard';

export default {
  name: 'SidebarMenu',
  components: {
    'user-card': UserCard,
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  },
};
</script>

<style>
.userCard {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-flow: column;
}
.imageWrapp {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  flex-flow: column;
}
.actionsWrapper {
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  margin-right: 40px;
  align-items: center;
}
</style>


