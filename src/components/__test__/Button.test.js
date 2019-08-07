import Button from '../Button.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

describe('Button', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(Button, {
      localVue,
      propsData: {
        name: 'Boton',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Check props', () => {});

  test('check Contents props', () => {});
});
