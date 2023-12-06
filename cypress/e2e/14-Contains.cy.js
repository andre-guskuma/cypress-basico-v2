
describe('Central de Atendimento ao Cliente CAC', () => {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })

  it('Verifica o titulo da aplicacao', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

it('Clear', () => {
  const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
//    cy.get('#firstName').type('Andre')
  cy.get('#firstName').type('Andre').should('have.value', 'Andre').clear().should('have.value', '').type('Andre').should('have.value', 'Andre')
  cy.get('#lastName').type('Guskuma')
  cy.get('#email').type('guskuma@hotmail.com')
  cy.get('#phone-checkbox').click()
  cy.get('#phone').type('abcdefgtretghjglkm').should('have.value','')
  cy.get('#phone').type('19996363818')
  cy.get('#open-text-area').type(textolongo, {delay: 0}) 
  cy.get('.button').click()
  cy.get('.success').should('be.visible')
})

it.only('Envia o formulario com sucesso usando um comando customizado', function() {
   cy.fillMandatoryFieldsAndSubmitWithContains()
   cy.get('.success').should('be.visible')
})

})