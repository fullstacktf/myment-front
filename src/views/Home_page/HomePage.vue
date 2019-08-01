<template>
  <div>
    <div class="welcome">
      <img src="public/assets/M.png" alt="myment-logo" class="logo" />
      <span>Welcome to your plan!</span>
    </div>
    <div class="bigContainer">
      <div class="containerSide">
        <side-menu :menu="menu" :collapsed="collapsed" :show-one-child="true">
          <div id="demo" :class="[{'collapsed' : collapsed}]">
            <div class="container">
              <h1>vue-sidebar-menu</h1>
              <p>A vue.js sidebar menu component</p>
              <div>
                Select theme:
                -white
                -black
              </div>
            </div>
          </div>
        </side-menu>
      </div>
      <div class="containerCenter"></div>
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
export default {
  name: 'Main',
  components: {
    'side-menu': SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          // component: componentName
          // visibleOnCollapse: true
          // class: ''
          // attributes: {}
        },
      ],
    };
  },
};
</script>

<style>
.logo {
  width: 150px;
  height: 150px;
}
.bigContainer {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
}
.containerCenter {
  width: 100%;
  height: 100%px;
  background-color: black;
}
.containerSide {
  min-width: 10px;
  min-height: 10px;
  background-color: #79f0a5;
}
.welcome {
  font-family: roboto, sans-serif;
}

.v-sidebar-menu {
  background: rgba(255, 255, 255, 30);
  width: 100%;
  height: 100%;
}
</style>
