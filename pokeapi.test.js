it('Successfully validate body', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('body').should('include',{"name": "ditto"})
})

