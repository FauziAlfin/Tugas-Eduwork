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

    it("should check the checkbox", () => {
        cy.get('#user_remember_me').check()
    });
})