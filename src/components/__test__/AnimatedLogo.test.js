import AnimatedLogo from '../AnimatedLogo.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

describe('AnimatedLogo', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(AnimatedLogo, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  }),

  test('Check props', () => {
    
  }),

  test('check Contents props', () => {
    
  });
});

