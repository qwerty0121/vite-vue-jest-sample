import { test, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

test('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'test message'
    }
  })

  expect(wrapper.find('.green').text()).toBe('test message')
})
