
<template>
  <slide-menu disableOutsideClick>
    <div>
      <b-collapse :open="false" aria-id="contentIdForA11y1">
        <button
          class="button is-warning is-medium"
          slot="trigger"
          aria-controls="contentIdForA11y1"
        >Sign up !</button>
        <div class="notification">
          <div class="content">
            <h3>Sign Up</h3>
            <signup-form></signup-form>
          </div>
        </div>
      </b-collapse>
    </div>
    <div>
      <signin-form></signin-form>
    </div>
    <div class="routerWrapper">
      <router-link v-if="userLoged" to="/home">
        <use-button v-if="userLoged" name="TO LOBBY" customWidth="300px" customHeight="60px"></use-button>
      </router-link>
    </div>
  </slide-menu>
</template>

<script>
import { Push } from 'vue-burger-menu';
import Button from './Button';
import SignUp from './SignUp';
import SignIn from './Signin';

export default {
  name: 'SidebarMenu',
  components: {
    'slide-menu': Push,
    'use-button': Button,
    'signup-form': SignUp,
    'signin-form': SignIn,
  },
  data() {
    return {
      userLoged: true,
      switchNameIn: true,
    };
  },
};
</script>

<style >
.routerWrapper {
  margin: 0 auto;
}
.home {
  margin-bottom: 100px;
}
.signInContainer {
  margin-top: 40px;

  margin-bottom: 40px;
}
.v-sidebar-menu,
.v-sidebar-menu * {
  box-sizing: border-box;
}
.v-sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 999;
  transition: 0.3s width;
}
.v-sidebar-menu.rtl {
  right: 0;
  left: inherit;
  text-align: right;
}
.v-sidebar-menu > .vsm-list {
  width: 100%;
  height: 100%;
  overflow: hidden auto;
}
.v-sidebar-menu.vsm-collapsed > .vsm-list {
  width: calc(100% + 17px);
  padding-right: 17px;
}
.v-sidebar-menu.rtl > .vsm-list {
  direction: rtl;
}
.v-sidebar-menu.vsm-collapsed.rtl > .vsm-list {
  padding-right: 0px;
  padding-left: 17px;
  margin-left: -17px;
}
.v-sidebar-menu.vsm-collapsed.rtl:after {
  content: '';
  display: block;
  clear: both;
}
.v-sidebar-menu .vsm-item {
  position: relative;
  display: block;
}
.v-sidebar-menu .vsm-item.first-item > .vsm-link {
  line-height: 20px;
}
.v-sidebar-menu .vsm-item.first-item > .vsm-link > .vsm-icon {
  height: 20px;
  line-height: 10px;
  width: 20px;
  text-align: center;
  border-radius: 3px;
}
.v-sidebar-menu .vsm-item.first-item > .vsm-link:after {
  content: '';
  display: block;
  clear: both;
}
.v-sidebar-menu .vsm-item.mobile-item > .vsm-link > .vsm-icon {
  height: 20px;
  line-height: 10px;
  width: 20px;
  text-align: center;
  border-radius: 3px;
}
.v-sidebar-menu .vsm-item.active-item > .vsm-link,
.v-sidebar-menu .vsm-item.parent-active-item > .vsm-link {
  font-weight: 600;
}
.v-sidebar-menu .vsm-link {
  position: relative;
  display: block;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  line-height: 10px;
  text-decoration: none;
  z-index: 20;
  transition: 0.3s all;
}
.v-sidebar-menu .vsm-link[disabled] {
  opacity: 0.4;
  pointer-events: none;
}
.v-sidebar-menu .vsm-title {
  display: block;
  white-space: nowrap;
}
.v-sidebar-menu .vsm-icon {
  float: left;
  line-height: 10px;
  margin-right: 10px;
  color: white !important;
}
.v-sidebar-menu.rtl .vsm-icon {
  float: right;
  margin-left: 10px;
  margin-right: 0px;
  color: white !important;
}

.v-sidebar-menu .vsm-arrow {
  width: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 900;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s transform;
}
.v-sidebar-menu .vsm-arrow:after {
  content: '\f105';
  font-family: 'Font Awesome 5 Free';
}
.v-sidebar-menu .vsm-arrow.slot-icon:after {
  display: none;
}
.v-sidebar-menu .vsm-arrow.open-arrow {
  transform: translateY(-50%) rotate(90deg);
}
.v-sidebar-menu.rtl .vsm-arrow {
  left: 10px;
  right: inherit;
}
.v-sidebar-menu .vsm-dropdown > .vsm-list {
  padding: 5px;
}
.v-sidebar-menu .expand-enter-active,
.v-sidebar-menu .expand-leave-active {
  transition: height 0.35s ease;
  overflow: hidden;
}
.v-sidebar-menu .expand-enter,
.v-sidebar-menu .expand-leave-to {
  height: 0 !important;
}
.v-sidebar-menu .slide-animation-enter-active {
  animation: slide-animation 0.2s;
}
.v-sidebar-menu .slide-animation-leave-active {
  animation: slide-animation 0.2s reverse;
}
@keyframes slide-animation {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
.v-sidebar-menu .vsm-header {
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  white-space: nowrap;
  text-transform: uppercase;
}
.v-sidebar-menu .vsm-badge {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.v-sidebar-menu .vsm-badge.default-badge {
  padding: 0px 6px;
  font-size: 12px;
  border-radius: 3px;
  height: 20px;
  line-height: 20px;
  font-weight: 600;
  text-transform: uppercase;
}
.v-sidebar-menu.rtl .vsm-badge {
  left: 10px;
  right: inherit;
}
.v-sidebar-menu .collapse-btn {
  display: block;
  text-align: center;
  font-style: normal;
  font-weight: 900;
  height: 50px;
  cursor: pointer;
  border: none;
  width: 100%;
}
.v-sidebar-menu .collapse-btn:after {
  content: '\f337';
  font-family: 'Font Awesome 5 Free';
}
.v-sidebar-menu .collapse-btn.slot-icon:after {
  display: none;
}
.bm-menu {
  background-color: #8e78c5 !important ;
  height: 100% !important;
  justify-self: center;
}
</style>


