import Home from '../Home.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import Router from 'vue-router';

describe('Home', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    Vue.use(Router);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(Home, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  }),
    test('Check props', () => {}),
    test('check Contents props', () => {});
});
