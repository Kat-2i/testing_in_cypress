describe('buttons tests', ()=>{
    // beforeEach(()=>{
    //     cy.visit('/')
    // })
    it('check how we can help you button', ()=>{
        // cy.contains('LEARN HOW WE CAN HELP YOU')
        // Cypress.getBySel('cmdSubmit')
        cy.visit('/')
        

    })
})



// cy.get().type('something{enter}')
// cy.contains('h1', 'todo').should('be.visible')
// custom commands go to support/ commands
// non visible buttons can be clicked with .click({force: true})
// cypress.json:
// {
    // 'baseUrl:' 'localhost:3000'
// } = in test file: beforeEach() => {
//     cy.visit('/')
// }
// reset data:
// beforeEach(()=> {
    // cy.request('POST', '/reset', {todos: []
    // })
// })
// use of plugins in code: cy.task('plugin name')
// cy.wait(miliseconds) is still available but could be done by connecting to server prior visiting a page:
// cy. server()
// cy.route('GET', /employees).as('employees')
// cy.visit('/')
// cy.wait('@employees')

// that can use fixtures folder to mock data: cy.route('GET', /employees, fixture:empty-list).as('employees')

// check if response was successfully sent
// cy.route('POST', /employees).as('new-employee')
// cy.visit('/')
// cy.wait('@employees')
// .its('response.body')
// .should('have.contain'. {
    // title: 
    // etc:
    // etc
// })
// 
// delay loading elemnt to inspect it in route method

