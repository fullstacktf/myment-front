import LoggedHeader from '../LoggedHeader.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

describe('LoggedHeader', () => {
  let localVue;
  const mock = { newsLetter: "Hi, I'm a new bar" };
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(LoggedHeader, {
      localVue,
      data() {
        return { mock };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Check props', () => {
    const wrapper = shallowMount(LoggedHeader, {
      localVue,
      data() {
        return mock;
      },
    });
    expect(wrapper.find('newsbar-stub').attributes().newnews).toBe(
      mock.newsLetter,
    );
  });

  test('check Contents props', () => {});
});
