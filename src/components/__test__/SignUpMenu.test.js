import SignUpMenu from '../SignUpMenu.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import VueRouter from 'vue-router';
import mock from '../../test/mockBack';

describe('SignUpMenu', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    Vue.use(VueRouter);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(SignUpMenu, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Check props', () => {});

  test('check Contents props', () => {});
});
