
<template>
  <slide-menu disableOutsideClick>
    <h3>MENU</h3>
    <div class="signInContainer">
      <sui-dropdown class="teal" disableOutsideClick text="Sign up" button floating>
        <sui-dropdown-menu>
          <signup-form></signup-form>
        </sui-dropdown-menu>
      </sui-dropdown>
    </div>

    <div class="signInContainer">
      <signin-form></signin-form>
    </div>
    <router-link v-if="userLoged" to="/home">
      <use-button v-if="userLoged" name="TO LOBBY" customWidth="300px" customHeight="60px"></use-button>
    </router-link>
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
    };
  },
};
</script>

<style >
.home {
  margin-bottom: 100px;
}
.signInContainer {
  margin-top: 40px;

  margin-bottom: 40px;
}

.bm-menu {
  background-color: #8e78c5 !important ;
}
h3 {
  margin-top: 30px;

  margin-bottom: 30px;
}
</style>


