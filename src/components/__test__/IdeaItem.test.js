import IdeaAdder from '../IdeaItem.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import { mockData } from '../../test/mockData';

const mock = {
  name: mockData.zone[0].food.ideas[0].name,
  description: mockData.zone[0].food.ideas[0].description,
  start: mockData.zone[0].food.ideas[0].startTime[0],
  end: mockData.zone[0].food.ideas[0].endTime[0],
};
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
      propsData: {
        ...mock,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('check button props', () => {
    const wrapper = shallowMount(IdeaAdder, {
      localVue,
      propsData: {
        ...mock,
      },
    });
    const button = wrapper.find('button');
    expect(button.text()).toBe('Guachinche Ivan');
  });

  test('check Contents props', () => {
    const wrapper = shallowMount(IdeaAdder, {
      localVue,
      propsData: {
        ...mock,
      },
    });
    const content = wrapper.find('.content');
    const Time = content.findAll('h3');
    const description = content.find('p');

    expect(Time.at(0).text()).toBe('9');
    expect(Time.at(1).text()).toBe('11');
    expect(description.text()).toBe(
      'Go to Guachinche Ivan in La Laguna and take a rabbit',
    );
  });
});
