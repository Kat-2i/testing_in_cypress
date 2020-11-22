describe("First test", ()=>{
    it("home page", ()=> {
        cy.visit("www.2itesting.com")
        cy.injectAxe();
        // test goes here
        cy.checkAccessibility();
    })
})