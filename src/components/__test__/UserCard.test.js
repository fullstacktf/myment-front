import UserCard from '../UserCard.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

describe('UserCard', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(UserCard, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  }),

  test('Check props', () => {
    
  }),

  test('check Contents props', () => {
    
  });
});


