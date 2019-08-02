import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import SuiVue from 'semantic-ui-vue';

import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

new Vue({
	store,
	router,
	render: (h) => h(App)
}).$mount('#app');
