import ShortGenerator from '../ShortGenerator.vue';
import { shallowMount } from '@vue/test-utils';

describe('ShortGenerator', () => {
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
