/// <reference types="cypress" />

import { appUrl } from '../../src/config'

describe('Boilerplate app', () => {
  it('App can be opened', () => {
    cy.visit(String(appUrl))
    cy.contains('Boilerplate')
  })
})