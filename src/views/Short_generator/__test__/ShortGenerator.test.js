import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import { mockData } from './mockData';
const mock = {
  name: mockData.zone[0].food.ideas[0].name,
  description: mockData.zone[0].food.ideas[0].description,
  timeStart: mockData.zone[0].food.ideas[0].startTime,
  timeEnd: mockData.zone[0].food.ideas[0].endTime,
};
describe('ShortGenerator', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    Vue.use(VueRouter);
    localVue = Vue;
  });

  test('render button', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('button exist', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
    });
    const existButton = wrapper.find('.button');
    expect(existButton).toBeTruthy();
  });

  test('Check the loggedAdded', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
      propsData: {
        ideaStructure: mock,
      },
    });
  });
});
