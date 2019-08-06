import NewsBar from '../NewsBar.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

describe('NewsBar', () => {
  let localVue;

  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(NewsBar, {
      localVue,
      propsData: {
        newNews: "Hi I'm news bar letter",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Check props', () => {});

  test('check Contents props', () => {});
});
