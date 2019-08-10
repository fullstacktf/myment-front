import IdeaForm from '../IdeaForm.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

describe('IdeaForm', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(IdeaForm, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  }),
    test('Check props', () => {}),
    test('check Contents props', () => {});
});
