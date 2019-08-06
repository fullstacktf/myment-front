---
to: <%= path %>/__test__/<%= name %>.test.js
unless_exist: true
---
import <%= name %> from '../<%= name%>.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Buefy from 'buefy';
import mock from '../../test/mockBack';

describe('<%= name %>', () => {
  let localVue;
  beforeEach(() => {
    const Vue = createLocalVue();
    Vue.use(Buefy);
    localVue = Vue;
  });
  test('render component', () => {
    const wrapper = shallowMount(<%= name %>, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });a

  test('Check props', () => {
    
  });

  test('check Contents props', () => {
    
  });
});


