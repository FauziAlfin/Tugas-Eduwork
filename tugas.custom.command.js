/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })
    it("should fill username", () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });
    it("should fill password", () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });
it ('should try to login', () =>{
    cy.fixture("user2").then (user => {
        const username = user.username
        const password = user.password

        cy.login(username, password)
    
    })
})

    it ('should go to pay bills tab', () =>{
    cy.url().should('include', '/bank/account-summary.html')
    cy.get('#pay_bills_tab').click()
})

    
    
})