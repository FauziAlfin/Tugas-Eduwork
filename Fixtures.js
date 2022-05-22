/// <reference types="cypress" />

describe('Fixtures and Static Data', () => {
    it('visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
    })
    it("should fill username", () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
    });
    it("should fill password", () => {
        cy.get('#password').clear()
        cy.get('#password').type('password')
    });
    it('should try to login', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            
        })
    })

    it('should load products page', () => {
        cy.url().should('include','/inventory.html') 
    });


    it('should to logout',()=>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })

    it('should try to login with "locked_out_user"', () => {
        cy.fixture('user').then(user => {
            const username2 = user.username2
            const password2 = user.password2

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username2)

            cy.get('#password').clear()
            cy.get('#password').type(password2)

            cy.get('#login-button').click()

            cy.get('h3').should('contain.text', 'Sorry, this user has been locked out')
        })
    })
    

   
    
})