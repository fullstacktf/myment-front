import SelectPlace from '../PlaceSelector.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';

describe('SelectPlace', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(SelectPlace, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  }),
    test('Check props', () => {}),
    test('check Contents props', () => {});
});
