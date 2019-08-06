import ShortGenerator from '../ShortGenerator.vue';
<<<<<<< HEAD
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
=======
import { shallowMount } from '@vue/test-utils';
import { mockData } from './mockData';

describe('ShortGenerator', () => {
  test('button exist', () => {
    const wrapper = shallowMount(ShortGenerator);
    const existButton = wrapper.find('button');
    expect(existButton).toBeTruthy();
  }),
    test('render button', () => {
      const wrapper = shallowMount(ShortGenerator);
      expect(wrapper.html()).toMatchSnapshot();
    }),
    test('Data exist', () => {
      const data = mockData;
      expect(data).toBe(1);
    });
>>>>>>> 1863ff2744c261473b8e58a14d87bdcc23910c70
});
