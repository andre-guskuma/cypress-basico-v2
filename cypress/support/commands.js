// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
    cy.get('#firstName').type('Andre').should('have.value', 'Andre').clear().should('have.value', '').type('Andre').should('have.value', 'Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type('abcdefgtretghjglkm').should('have.value','')
    cy.get('#phone').type('19996363818')
    cy.get('#open-text-area').type(textolongo, {delay: 0}) 
    cy.get('.button').click()

})


Cypress.Commands.add('fillMandatoryFieldsAndSubmitWithContains', function() {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
    cy.get('#firstName').type('Andre').should('have.value', 'Andre').clear().should('have.value', '').type('Andre').should('have.value', 'Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type('abcdefgtretghjglkm').should('have.value','')
    cy.get('#phone').type('19996363818')
    cy.get('#open-text-area').type(textolongo, {delay: 0}) 
//    cy.get('.button').click()
    cy.contains('button', 'Enviar').click()

})