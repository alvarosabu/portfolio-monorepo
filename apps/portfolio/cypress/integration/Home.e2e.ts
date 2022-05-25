/// <reference types="cypress" />

describe('Home Page', () => {
  before(() => {
    cy.clearLocalStorageSnapshot()
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit('http://localhost:2590')
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  context('General', () => {
    it('should change the page to dark mode', () => {
      cy.get('html').then($html => {
        cy.get('#dark-switch + label').click()
        cy.get('html').should('have.class', 'dark')
      })
    })
  })

  context('Home hero', () => {
    it('should have a Home hero component', () => {
      cy.get('[data-cy="home-hero"').should('exist')
    })

    it('should have a Home hero component with a title', () => {
      cy.get('[data-cy="home-hero-title"]')
        .should('have.prop', 'tagName')
        .should('eq', 'H2')
    })

    it('should have a Home hero component with text', () => {
      cy.get('[data-cy="home-hero"] p').should('exist')
    })

    it('should have a Home hero component with social links', () => {
      cy.get('[data-cy="social-links"]')
        .find('li')
        .its('length')
        .should('be.gte', 0)
    })
  })

  context('Open Source section', () => {
    it('should have a Open Source section', () => {
      cy.get('[data-cy="repos"]').should('exist')
    })

    it('should have a Open Source section with a title', () => {
      cy.get('[data-cy="repos-title"]')
        .should('have.prop', 'tagName')
        .should('eq', 'H2')
    })

    it('should have a Open Source section with a list of projects', () => {
      cy.get('[data-cy="repos"]')
        .scrollIntoView()
        .find('[data-cy="github-card"]')
        .its('length')
        .should('be.gte', 0)
    })

    it('should have a list of repositories with links to repos', () => {
      cy.get('[data-cy="repos"]')
        .scrollIntoView()
        .find('[data-cy="github-card"]')
        .should('have.attr', 'href')
        .and('match', /github.com/)
    })

    it('should go to repository if card is clicked', () => {
      cy.get('[data-cy="repos"]')
        .scrollIntoView()
        .find('[data-cy="github-card"]')
        .first()
        .click()
        .url()
        .should('include', 'github.com')
    })

    /*     it('should go to github sponsors if Button Sponsor is clicked', () => {
      cy.get('[data-cy="button-sponsor"]').scrollIntoView().click()
      cy.url().should('include', 'github.com/sponsors/alvarosabu')
    })

    it('should go to my repositories list on Github if "Go to github" button is clicked', () => {
      cy.get('[data-cy="button-github"]').scrollIntoView().click()
      cy.url().should('include', 'github.com/alvarosabu?tab=repositories')
    }) */
  })
})
