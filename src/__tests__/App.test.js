import { test, expect } from '@jest/globals'
import App from '../App.vue'
import { mount } from '@vue/test-utils'

test('App.vue', () => {
  const wrapper = mount(App, { shallow: true })

  expect(wrapper.find('.logo').exists()).toBe(true)
})
