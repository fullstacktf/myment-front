import IdeaAdder from '../IdeaItem.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

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
});
