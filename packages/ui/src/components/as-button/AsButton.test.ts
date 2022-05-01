import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AsButton from './AsButton.vue'

test('mount component', async () => {
  expect(AsButton).toBeTruthy()

  const cmp = mount(AsButton, {
    props: {
      count: 4,
    },
  })
})
