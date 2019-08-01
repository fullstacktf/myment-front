import { shallowMount } from '@vue/test-utils';
import Main from '../Main';

describe('Main Component', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(Main, {
			propsData: {},
			mocks: {},
			stubs: {},
			methods: {}
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	test('Mount component', () => {
		expect(wrapper.isVueInstance).toBeTruthy();
	});
	test('Contain Welcome message', () => {
		expect(wrapper.html()).toContain('<span>Welcome to your plan!</span>');
	});
});
