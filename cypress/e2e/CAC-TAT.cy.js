describe('Central de Atendimento ao Cliente CAC', () => {
  it('Verifica o titulo da aplicacao', () => {
    cy.visit('./src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})