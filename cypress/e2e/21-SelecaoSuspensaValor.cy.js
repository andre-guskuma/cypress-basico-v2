
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

it('Envia o formulario com sucesso usando um comando customizado', function() {
   cy.fillMandatoryFieldsAndSubmitWithContains()
   cy.get('.success').should('be.visible')
})

it('Seleciona um produto (YouTube) por seu texto', function() {
  cy.get('#product')
  .select('YouTube')
  .should('have.value', 'youtube')
})

it('Seleciona um produto (Mentoria) por seu valor (value)', function() {
  cy.get('#product')
  .select('mentoria')
  .should('have.value', 'mentoria')
})

it('Seleciona um produto (Blog) por seu indice', function() {
  cy.get('#product')
  .select(1)
  .should('have.value', 'blog')
})

it('marca o tipo de atendimento Feedback ', function() {
  cy.get('input[type="radio"][value="feedback"]')
  .check()
  .should('have.value', 'feedback')
})

it('marca cada tipo de atendimento', function() {
  cy.get('input[type="radio"]')
  .should('have.length', 3)
  .each(function($radio){
    cy.wrap($radio).check()
    cy.wrap($radio).should('be.checked')
  })
})

it('marca ambos checkbox e depois desmarca o o ultimo', function() {
  cy.get('input[type="checkbox"]')
  .check()
  .should('be.checked')
  .last()
  .uncheck()
  .should('not.be.checked')
  })

  
it('uso do check() ao inves do click()', () => {
  const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
  cy.get('#firstName').type('Andre').should('have.value', 'Andre').clear().should('have.value', '').type('Andre').should('have.value', 'Andre')
  cy.get('#lastName').type('Guskuma')
  cy.get('#email').type('guskuma@hotmail.com')
  cy.get('#phone-checkbox').check().should('be.checked')
  cy.get('#phone').type('abcdefgtretghjglkm').should('have.value','')
  cy.get('#phone').type('19996363818')
  cy.get('#open-text-area').type(textolongo, {delay: 0}) 
  cy.get('.button').click()
  cy.get('.success').should('be.visible')
})

it('seleciona um arquivo da pasta lessons', function() {
  cy.get('input[type="file"]')
  .should('not.have.value')
  .selectFile('./cypress/fixtures/example.json')
  .should(function($input) {
     expect($input[0].files[0].name).to.equal('example.json')
  })
  })

it('seleciona um arquivo da pasta lessons via drag-drop', function() {
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(function($input) {
       expect($input[0].files[0].name).to.equal('example.json')
    })
    })

it('seleciona um arquivo da pasta lessons via drag-drop', function() {
  cy.fixture('example.json').as('sampleFile')
  cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      })

it('verifica que a politica de privacidade abre em outra aba sem necessicade de clicar', function() {
   cy.get('#privacy a').should('have.attr', 'target', '_blank')
      })
  
it('acesso a pagina de politica de privacidade removendo o target e entao trabalhando na mesma pagina', function() {
        cy.get('#privacy a')
           .invoke('removeAttr', 'target')
           .click()

        cy.contains('Talking About Testing').should('be.visible')
           })

it.only('testa a pagina de politica de privacidade de forma independente', function() {
  cy.visit('./src/privacy.html')
  cy.contains('Talking About Testing').should('be.visible')

      })
           

  })
