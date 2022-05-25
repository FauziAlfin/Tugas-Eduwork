///<reference types="cypress"/>

describe('Saucedemo.com', function() {
    before(() => {
        cy.visit('https://saucedemo.com/')
        cy.get('#login_button_container').should('be.visible')
    })

    it('Should try to login with locked out user', () => {
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Should display error message', () => {
        cy.get('h3').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
   })

   it('Should try to login with wrong username/password', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('qqqqq')
        cy.get('#password').type('qqqqq')
        cy.get('#login-button').click()
    })

    it('Should display error message', () => {
        cy.get('h3').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Should login to application with standard user', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include','inventory.html') 
        
    })

    it('Should check filter product icon', () => {
        cy.get('.product_sort_container').should('contain.value', 'az')
    })



    it('Should check menu icon and logout', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').should('be.visible')
        cy.get('#logout_sidebar_link').click()
        cy.get('#login-button').should('be.visible')
    })

    



})