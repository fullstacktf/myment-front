import TagAdder from '../TagAdder.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import Router from 'vue-router';
import storePlugin from '../../../storePlugin';

describe('TagAdder', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    Vue.use(Router);
    Vue.use(storePlugin);

    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(TagAdder, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Check props', () => {});

  test('check Contents props', () => {});
});
