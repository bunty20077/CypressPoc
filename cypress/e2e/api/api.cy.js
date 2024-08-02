

describe('REST API TEST WITH CYPRESS', () =>{

    it('API Test - Header Validation', () =>{

        cy.request(Cypress.env('baseUrl')).as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8') // Verifying Header    
    })

    it('API Test - Status Validation', () =>{

        cy.request(`${Cypress.env('baseUrl')}/25`).as('pokemon')
        cy.get('@pokemon').its('status')
        .should('equal',200) // Verifying Response Status Code   
    })

    it('API Test - Validate Name Value', () => {

        cy.request(`${Cypress.env('baseUrl')}/25`).as('pokemon')
        cy.get('@pokemon').its('body')
        .should('include',{name:'pikachu'}) // Verifying Response Name Value  
        //.should('have.property','name','pikachu') // Both the process is correct
    });
    
});