import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import favicon from '../public/assets/favicon.ico';
Vue.use(favicon);
Vue.use(Buefy);
Vue.use(Router);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
