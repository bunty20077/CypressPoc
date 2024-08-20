/// <reference types="Cypress" />

describe('REST API TEST WITH CYPRESS', () =>{

    it('API Test - Header Validation', () =>{

        cy.request(`${Cypress.env('apiUrl')}/pet/1`).as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json') // Verifying Header    
    })

    it('API Test - Status Validation', () =>{

        cy.request(`${Cypress.env('apiUrl')}/pet/1`).as('pokemon')
        cy.get('@pokemon').its('status')
        .should('equal',200) // Verifying Response Status Code   
    })

    it('API Test - Validate Name Value', () => {

        cy.request(`${Cypress.env('apiUrl')}/pet/1`).as('pokemon')
        cy.get('@pokemon').its('body')
        .should('include',{name:'Doggie'}) // Verifying Response Name Value  
        //.should('have.property','name','pikachu') // Both the process is correct
    });
    
});