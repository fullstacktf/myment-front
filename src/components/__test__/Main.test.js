import { mount } from '@vue/test-utils'
import Main from '../Main'

describe('Main', () => {
  const wrapper = mount(Main)
  test('Mount component', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })
  test('Contain title', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })
})
