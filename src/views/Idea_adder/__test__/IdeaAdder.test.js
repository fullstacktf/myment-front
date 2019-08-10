import IdeaAdder from '../IdeaAdder.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';

describe('IdeaAdder', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(IdeaAdder, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  }),
    test('Check props', () => {}),
    test('check Contents props', () => {});
});
