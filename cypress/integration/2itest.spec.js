///<reference types="cypress" />

describe('checking 2i website', ()=>{
    beforeEach(()=>{
        cy.visit("www.2itesting.com")
    })
    it('website should have links', ()=>{
        cy.contains('HOME');
        cy.contains('Services')
        cy.contains('About')
        cy.contains('News')
        cy.contains('Case Studies')
        cy.contains('Working for us')
        cy.contains('Contact')
    })
    it('link should match a path name version 1', ()=>{
        cy.get("#barMainNav > div > nav > div > ul > li:nth-child(2) > a").click()
        cy.location('pathname').should('eq', '/services/')
    })
    it('link should match a path name version 2', ()=>{
        cy.get('#barMainNav > div > nav > div > ul > li:nth-child(3) > a > span').click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq('https://2itesting.com/about/our-business/')
          })
        cy.contains('Our mission')
        cy.contains('Our vision')
        cy.contains('Our promise')
        
        }) 
        
  
})