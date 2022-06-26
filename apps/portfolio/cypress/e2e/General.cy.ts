/// <reference types="cypress" />

describe('General', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Dark Mode', () => {
    it('should change the page to dark mode', () => {
      cy.get('#dark-switch + label').click()
      cy.get('html').should('have.class', 'dark')
    })
  })

  context('Navigation', () => {
    it('should navigate to the Home page', () => {
      cy.get('[data-cy="main-navigation"]').find('a').first().click()
      cy.url().should('include', '/')
    })

    it('should navigate to the Portfolio page', () => {
      cy.get('[data-cy="main-navigation"]').find('a').eq(1).click()
      cy.url().should('include', '/portfolio')
    })

    it('should navigate to the About page', () => {
      cy.get('[data-cy="main-navigation"]').find('a').eq(2).click()
      cy.url().should('include', '/uses')
    })
  })
})
