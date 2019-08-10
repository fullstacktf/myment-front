import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import storeConfig from '../../../store/store-index';
import storePlugin from '../../../storePlugin';
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
    Vue.use(storePlugin);
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
      computed: {
        tags() {
          return true;
        },
      },
    });

    expect(wrapper.find('.itineraryComponent').exists()).toBeTruthy();
  });

  test('Not exist itineraryComponent if tagsAdded is false', () => {
    const store = new Vuex.Store(cloneDeep(storeConfig));
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
      computed: {
        tags() {
          return false;
        },
      },
    });
    expect(wrapper.find('.itineraryComponent').exists()).toBeFalsy();
  });
});
