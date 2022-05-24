/// <reference types="cypress" />


describe('Login/ Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })
 
    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    })
 
    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    })
 
    it('Should login to application with valid data', () => {

        cy.fixture("user2").then (user => {
            const username = user.username
            const password = user.password
 
            cy.get('#user_login').clear()
           
   
            cy.login(username, password)
        })
           
        
    })
 
    it('should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Feedback')
 
 
    } )






})