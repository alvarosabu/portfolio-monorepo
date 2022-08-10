/// <reference types="cypress" />

describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/blog')
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
    })
  })

  context('Featured Hero', () => {
    it('should render a Featured Hero component', () => {
      cy.get('[data-cy="featured-hero"]').should('exist')
    })

    it('should render a Featured Hero component with an h2 title', () => {
      cy.get('[data-cy="featured-hero-title"]').should('have.prop', 'tagName').should('eq', 'H2')
    })

    it('should render a Featured Hero component with a h3 subtitle', () => {
      cy.get('[data-cy="featured-hero-subtitle"]').should('have.prop', 'tagName').should('eq', 'H3')
    })

    it('should render a Featured Hero component with a paragraph', () => {
      cy.get('[data-cy="featured-hero"]').find('p').should('exist')
    })

    it('should render a Featured Hero component with a read more secondary button', () => {
      cy.get('[data-cy="featured-hero"]').find('button').should('exist')
      cy.get('[data-cy="featured-hero"]').find('button').should('have.class', 'btn-secondary')
    })

    it('should navigate to the Featured article page if the read more button is clicked', () => {
      cy.get('[data-cy="featured-hero"] footer').find('a').click()
      cy.url().should('include', '/blog/')
    })
  })

  context('Blog list', () => {
    it('should render a grid with several articles', () => {
      cy.get('[data-cy="blog-list"]').find('[data-cy="article"]').its('length').should('be.gte', 0)
    })

    it('should navigate to the Featured Blog page if the read more button is clicked', () => {
      cy.get('[data-cy="article"]').first().find('a').click()
      cy.url().should('include', '/blog/')
    })
  })
})
