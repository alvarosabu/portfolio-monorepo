/// <reference types="cypress" />

describe('Uses Page', () => {
  before(() => {
    cy.clearLocalStorageSnapshot()
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit('/uses')
    cy.injectAxe()
    cy.configureAxe({
      rules: [{ id: 'color-contrast', enabled: false }],
    })
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  context('General', () => {
    it('should change the page to dark mode', () => {
      cy.get('#dark-switch + label').click()
      cy.get('html').should('have.class', 'dark')
    })
  })

  context('A11y', () => {
    it('should have no detectable a11y violations on load', () => {
      cy.wait(1500)
      cy.checkA11y()
    })

    it('should have no detectable a11y violations on load after changing to dark mode', () => {
      cy.get('#dark-switch + label').click()
      cy.wait(1500)
      cy.checkA11y()
    })
  })

  context('Uses hero', () => {
    it('should have a Uses hero component', () => {
      cy.get('[data-cy="hero"]').should('exist')
    })

    it('should have a Uses hero component with a title', () => {
      cy.get('[data-cy="hero-title"]').should('have.prop', 'tagName').should('eq', 'H1')
    })

    it('should have a Uses hero component with text', () => {
      cy.get('[data-cy="hero"] p').should('exist')
    })

    it('should have a shevas animation', () => {
      cy.get('[data-cy="shevas"]').should('exist')
    })

    it('should have a link to Mark Backes uses page', () => {
      cy.get('[data-cy="hero"] a')
        .invoke('removeAttr', 'target')
        .click()
        .url()
        .should('include', 'https://marc.dev/uses/')
    })
  })

  context('Uses section', () => {
    it('should render 3 uses sections', () => {
      cy.get('[data-cy="uses"]').its('length').should('be.equal', 3)
    })

    it('should render a uses section with a h2 title', () => {
      cy.get('[data-cy="uses-title"]').should('have.prop', 'tagName').should('eq', 'H2')
    })

    it('should render a uses section with a list of uses', () => {
      cy.get('[data-cy="uses"]').find('ul li').its('length').should('be.gte', 0)
    })
  })
})
