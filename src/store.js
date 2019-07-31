import Vue from 'vue';
import Vuex from 'vuex';
import actions from './store/actions';
import mutations from './store/mutations';
import states from './store/states';

Vue.use(Vuex);

export default new Vuex.Store({
	states,
	mutations,
	actions
});
