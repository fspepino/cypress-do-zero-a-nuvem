describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    // root-level hook
    cy.visit('./src/index.html')
  })  
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', ()=>{
    cy.get('[name="firstName"]').type('nome')
    cy.get('[name="lastName"]').type('sobrenome')
    cy.get('[name="phone"').type('519999999')
    cy.get('[name="email').type('email')
    
  })
})
