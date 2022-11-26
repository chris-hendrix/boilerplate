/// <reference types="cypress" />

describe('Ping Boilerplate app', () => {
  it('App can be opened', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Ping Boilerplate')
  })
})