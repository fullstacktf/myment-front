import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount } from '@vue/test-utils';
import { MockData } from "./mockData";

describe('ShortGenerator', () => {
	beforeEach(() => {
		initializeCityDatabase();
	  });
	  
	  afterEach(() => {
		clearCityDatabase();
	  });
	
	test('button exist', () => {
		const wrapper = shallowMount(ShortGenerator);
		const existButton = wrapper.find('button');
		expect(existButton).toBeTruthy();
	}),
		test('render button', () => {
			const wrapper = shallowMount(ShortGenerator);
			expect(wrapper.html()).toMatchSnapshot();
		});
});
