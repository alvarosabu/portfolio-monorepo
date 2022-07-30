/// <reference types="cypress" />

describe('Portfolio Page', () => {
  beforeEach(() => {
    cy.visit('/portfolio/smidae')
    cy.injectAxe()
    cy.configureAxe({
      rules: [{ id: 'color-contrast', enabled: false }],
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

  context('General', () => {
    it('should have an h1 with the title of the page', () => {
      cy.get('h1').should('exist')
      cy.get('h1').should('have.text', 'Smidae')
    })
    it('should have an project thumbnail', () => {
      cy.get('[data-cy="project-thumbnail"]').should('exist')
      cy.get('[data-cy="project-thumbnail"]')
        .find('img')
        .should('have.attr', 'src')
        .and('match', /a.storyblok.com/)
    })
    it('should have a published date', () => {
      cy.get('[data-cy="published-date"]').should('contain.text', 'Published at')
    })
    it('should have a badge with category', () => {
      cy.get('[data-cy="published-date"').find('span').should('have.text', 'Webdev')
    })
    it('should have a list of tags', () => {
      cy.get('[data-cy="tag-list"]').find('li').should('have.length', 4)
    })
  })
})
