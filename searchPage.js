const URL = 'http://zero.webappsecurity.com/'
const SEARCH ='#searchTerm'

class searchPage{
    static visit(){
        cy.visit(URL)
    }
    static searchtext(online) {
        cy.get(SEARCH).type(online)
    }
}
export default searchPage