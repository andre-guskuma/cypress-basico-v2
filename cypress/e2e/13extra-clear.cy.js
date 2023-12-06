//describe('template spec', () => {
//  it('passes', () => {
//    cy.visit('https://example.cypress.io')
//  })
//})

//const { delay } = require("cypress/types/bluebird")

describe('Central de Atendimento ao Cliente CAC', () => {
  beforeEach(function() {
    cy.visit('./src/index.html')
  })

  it('Verifica o titulo da aplicacao', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche Nome, Sobrenome, Email, Phone e texto', () => {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail.com')
    cy.get('#phone').type('19996363818')
//cy.get('#product').type Blog Cursos Mentoria YouTube
//cy.get('#support-type > :nth-child(3)')   elogio
//cy.get('#phone-checkbox') telefone 
    cy.get('#open-text-area').type(textolongo, {delay: 0})
//cy.get('#file-upload')   choose file 
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })


  it('Preenche Nome, Sobrenome, Email invalido, Phone e texto', () => {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
    const textocurto = 'texto'
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail,com')
    cy.get('#phone').type('19996363818')
//cy.get('#product').type Blog Cursos Mentoria YouTube
//cy.get('#support-type > :nth-child(3)')   elogio
//cy.get('#phone-checkbox') telefone 
    cy.get('#open-text-area').type(textocurto, {delay: 0})
//cy.get('#file-upload')   choose file 
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  
  it.only('Preenche Nome, Sobrenome, Email, Phone validado e texto', () => {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail.com')
    cy.get('#phone').type('abcdefgtretghjglkm').should('have.value','')
    cy.get('#open-text-area').type(textolongo, {delay: 0}) 
    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })

  
  it('13 apaga valor e confere Preenche Nome, Sobrenome, Email, Phone e texto', () => {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail.com')
    cy.get('#phone').type('19996363818').clear()
//cy.get('#product').type Blog Cursos Mentoria YouTube
//cy.get('#support-type > :nth-child(3)')   elogio
    cy.get('#phone-checkbox').click() 
    cy.get('#open-text-area').type(textolongo, {delay: 0})
//cy.get('#file-upload')   choose file 
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('13 apaga valor e confere Preenche Nome, Sobrenome, Email, Phone e texto', () => {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail.com')
//cy.get('#product').type Blog Cursos Mentoria YouTube
//cy.get('#support-type > :nth-child(3)')   elogio
    cy.get('#phone-checkbox').click()
    cy.get('#phone').type('19996363818')
    cy.get('#open-text-area').type(textolongo)
//cy.get('#file-upload')   choose file 
    cy.get('.button').click()
    cy.get('success').should('be.visible')
  })


  it('13 apaga valor e confere Preenche Nome, Sobrenome, Email, Phone e texto', () => {
    const textolongo = 'texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo texto longo' 
//    cy.get('#firstName').type('Andre').should('have.value', 'Andre').clear().should('have.value', '').type('Andre').should('have.value', 'Andre')
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Guskuma')
    cy.get('#email').type('guskuma@hotmail.com')
//cy.get('#product').type Blog Cursos Mentoria YouTube
//cy.get('#support-type > :nth-child(3)')   
    cy.get('#phone').type('19996363818')
//    cy.get('#phone-checkbox').click()
//    cy.get('#phone').type('19996363818')
    cy.get('#open-text-area').type(textolongo)
//cy.get('#file-upload')   choose file 
    cy.get('.button').click()
//    cy.wait(3000)
    cy.get('success').should('be.visible')
  })  


  it.only('Clear', () => {
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

  

})
