import { h } from 'vue'
import { mount } from '@cypress/vue'
import { btnSize, btnVariant } from './const'
import 'uno.css'

import AsButton from './AsButton.vue'

describe('Basic', () => {
  it('renders a label', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
      },
    })

    cy.get('button').should('have.text', label)
  })

  it('disables the button', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
      },
      attrs: {
        disabled: true,
      },
    })

    cy.get('button').should('be.disabled')
  })
})

describe('Variants', () => {
  it('renders a button with primary color by default', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
      },
    })

    cy.get('button').should('have.css', 'background-color', 'rgb(81, 106, 134)')
  })

  it('renders a button with secondary color', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
        variant: btnVariant.SECONDARY,
      },
    })

    cy.get('button').should('have.css', 'background-color', 'rgb(94, 220, 174)')
  })
})

describe('Sizes', () => {
  it('renders a large button', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
        size: btnSize.LG,
      },
    })

    cy.get('button').should('have.css', 'font-size', '18px')
    cy.get('button').should('have.css', 'padding-top', '10px')
    cy.get('button').should('have.css', 'padding-bottom', '10px')
    cy.get('button').should('have.css', 'padding-left', '20px')
    cy.get('button').should('have.css', 'padding-right', '20px')
  })

  it('renders a small button', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
        size: btnSize.SM,
      },
    })

    cy.get('button').should('have.css', 'font-size', '12px')
    cy.get('button').should('have.css', 'padding-top', '4px')
    cy.get('button').should('have.css', 'padding-bottom', '4px')
    cy.get('button').should('have.css', 'padding-left', '8px')
    cy.get('button').should('have.css', 'padding-right', '8px')
  })

  it('renders a block button', () => {
    const label = 'Awiwi'
    mount(AsButton, {
      propsData: {
        label,
        size: btnSize.BLOCK,
      },
    })

    cy.get('button').should('have.class', 'w-full')
  })
})

describe('Icons', () => {
  it('renders an icon', () => {
    const label = 'Awiwi'
    const icon = 'code'
    mount(AsButton, {
      propsData: {
        label,
        icon,
      },
    })

    cy.get('button > div').should('have.class', 'i-carbon-code')
  })
})

describe('Link', () => {
  it('renders a button link', () => {
    const label = 'Awiwi'
    const href = 'https://awiwi.com'
    mount(AsButton, {
      propsData: {
        label,
        link: href,
      },
    })

    cy.get('a').should('have.attr', 'href', href)
  })

  it('renders a button link with target', () => {
    const label = 'Awiwi'
    const href = 'https://awiwi.com'
    mount(AsButton, {
      propsData: {
        label,
        link: href,
        target: '_self',
      },
    })

    cy.get('a').should('have.attr', 'target', '_self')
  })
})

describe('Slots usage', () => {
  it('renders a label via default slot', () => {
    mount(AsButton, {
      slots: {
        default: h('i', 'Awiwi'),
      },
    })

    cy.get('button').should('have.text', 'Awiwi')
  })

  it('add a custom icon as preffix', () => {
    mount(AsButton, {
      slots: {
        default: h('i', 'Awiwi'),
        preffix: h('i', { class: 'i-carbon-github' }),
      },
    })

    cy.get('i').should('have.class', 'i-carbon-github')
  })
})
