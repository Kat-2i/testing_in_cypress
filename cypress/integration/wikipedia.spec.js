///<reference types="cypress" />

describe('Testing Wikipedia', () => {
    beforeEach(()=>{
        cy.visit('https://www.wikipedia.org');
    })
    it('Can use search feature', () => {
      cy.get("input[type='search']").type('Nick Cave');
      cy.get("button[type='submit']").click();
      cy.contains('Where the Wild Roses Grow');
      cy.get("#mw-content-text > div.mw-parser-output > p:nth-child(6) > a:nth-child(4)").click()
      cy.contains("Song of the Year")
    });

    it('Can switch languages', () => {
        cy.contains('Read Wikipedia in your language');
        cy.get('#js-lang-list-button').click();
        cy.contains('Polski').click();
        cy.url().should(
          'equal',
          'https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna',
        );
        
      });
  });