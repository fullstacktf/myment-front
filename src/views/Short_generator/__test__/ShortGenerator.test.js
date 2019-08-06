import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import { mockData } from '../../../test/mockData';
const mock = {
  name: mockData.zone[0].food.ideas[0].name,
  description: mockData.zone[0].food.ideas[0].description,
  timeStart: mockData.zone[0].food.ideas[0].startTime[0],
  timeEnd: mockData.zone[0].food.ideas[0].endTime[0],
};
describe('ShortGenerator', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
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
    const wrapper = shallowMount(ShortGenerator, {
      localVue,
      data() {
        return {
          tagsAdded: false,
        };
      },
    });
    expect(wrapper.find('.itineraryComponent').exists()).toBeFalsy();
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
