describe('Login Via API', function (){
    it("Successfully login via API", () => {
      cy.loginViaAPI(Cypress.env('email'), Cypress.env('password'))
        
       
        
        
    });
})

