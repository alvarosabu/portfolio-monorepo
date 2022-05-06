import { mount } from '@cypress/vue'
import 'uno.css'

import AsButton from './AsButton.vue'

describe('AsButton', () => {
  it('renders a label', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
      },
    })

    cy.get('button').should('have.text', label)
  })
})
