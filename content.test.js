
describe('validate body', () => {
    it("Successfully validate body", () => {

        var ditto = {"ability": {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        }}

        cy.request('https://pokeapi.co/api/v2/pokemon/ditto', ditto).as ('pokemon').then((response) =>{
            expect(response.body.abilities[0].ability.name).to.eq(ditto.ability.name)
            expect(response.body.abilities[0].ability.url).to.eq(ditto.ability.url)
        
        })
    });
})

