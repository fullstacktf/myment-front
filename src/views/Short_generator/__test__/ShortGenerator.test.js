import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Buefy from 'buefy';

describe('ShortGenerator', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    Vue.use(VueRouter);
    localVue = Vue;
  });

  test('button exist', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
    });
    const existButton = wrapper.find('button');
    expect(existButton).toBeTruthy();
    expect();
  });
  test('render button', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
