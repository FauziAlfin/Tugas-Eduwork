/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import searchPage from './searchPage'

Given('I navigate to the website', () => {
    searchPage.visit()
})

When('I type word online then press Enter', () => {
    searchPage.searchtext('online{enter}')

})

Then('I should see search result page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')

})