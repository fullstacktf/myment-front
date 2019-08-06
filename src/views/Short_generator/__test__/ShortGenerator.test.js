import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount } from '@vue/test-utils';
import { mockData } from './mockData';

describe('ShortGenerator', () => {
  test('button exist', () => {
    const wrapper = shallowMount(ShortGenerator);
    const existButton = wrapper.find('button');
    expect(existButton).toBeTruthy();
  }),
    test('render button', () => {
      const wrapper = shallowMount(ShortGenerator);
      expect(wrapper.html()).toMatchSnapshot();
    }),
    test('Data exist', () => {
      const data = mockData;
      expect(data).toBe(1);
    });
});
