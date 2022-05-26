/// <reference types="cypress" />

import { should } from 'chai'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to the website', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

When('I type word online then press Enter', () => {
    cy.get('#searchTerm').type('online{enter}')

})

Then('I should see search result page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')

})