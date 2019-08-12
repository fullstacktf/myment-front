import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store';

import storePlugin from './storePlugin';

import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import favicon from '../public/assets/favicon.ico';
import VueMouseParallax from 'vue-mouse-parallax';

Vue.use(VueMouseParallax);
Vue.use(favicon);
Vue.use(Buefy);
Vue.use(Vuex);
Vue.use(storePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#appp');
