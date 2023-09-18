import { test, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

test('HelloWorld.vue', () => {
  import.meta.env.VITE_TEST1 = 'test environment value'

  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'test message'
    }
  })

  expect(wrapper.find('.green').text()).toBe('test message')
  expect(wrapper.find('[data-test="env-message"]').text()).toBe('test environment value')
})
