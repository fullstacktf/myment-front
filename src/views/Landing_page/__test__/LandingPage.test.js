import LandingPage from '../LandingPage.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import VueRouter from 'vue-router';
import VueMouseParallax from 'vue-mouse-parallax';

describe('LandingPage', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    Vue.use(VueRouter);
    Vue.use(VueMouseParallax);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(LandingPage, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Check props', () => {});

  test('check Contents props', () => {});
});
