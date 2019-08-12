import Vue from 'vue';
import Vuex from 'vuex';
import actions from './store/actions';
import mutations from './store/mutations';
import state from './store/state';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
