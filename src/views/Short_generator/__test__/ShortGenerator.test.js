import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import storeConfig from '../../../store/store-index';
import { cloneDeep } from 'lodash';
import Buefy from 'buefy';
import { mock } from '../../../test/mockBack';

describe('ShortGenerator', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    Vue.use(Vuex);
    Vue.use(VueRouter);
    localVue = Vue;
  });

  test('render component', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Exist itineraryComponent if tagsAdded is true', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
      data() {
        return {
          tagsAdded: true,
        };
      },
    });

    expect(wrapper.find('.itineraryComponent').exists()).toBeTruthy();
  });

  test('Not exist itineraryComponent if tagsAdded is false', () => {
    const store = new Vuex.Store(cloneDeep(storeConfig));
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
      store,
    });
    expect(wrapper.html()).toBeFalsy();
  });

  test('Checks ideaItem props', () => {
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
      data() {
        return {
          ideaStructure: [mock],
          tagsAdded: true,
        };
      },
    });
    const attr = wrapper.find('idea-item-stub').attributes();

    expect(attr.description).toBe(mock.description);
    expect(attr.end).toBe(mock.timeEnd.toString());
    expect(attr.start).toBe(mock.timeStart.toString());
    expect(attr.name).toBe(mock.name);
  });
});
