describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    // root-level hook
    cy.visit('./src/index.html')
  })  
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', ()=>{
    cy.get('#firstName').type('nome')
    cy.get('#lastName').type('sobrenome')
    cy.get('#phone').type('519999999')
    cy.get('#email').type('email@mail.com')
    cy.get('#open-text-area').type('oiiiiiieeeeeeee')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
      cy.get('#firstName').type('nome')
      cy.get('#lastName').type('sobrenome')
      cy.get('#phone').type('519999999')
      cy.get('#email').type('emailail.com')
      cy.get('#open-text-area').type('oiiiiiieeeeeeee')
      cy.get('button[type="submit"]').click()
      cy.get('.error').should('be.visible')

    })

    it('campo telefone permanece vazio quando não for numerico', () => {
     
      cy.get('#phone')
        .type('abcde')
          .should('have.value','')

    })
    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
      cy.get('#firstName').type('nome')
      cy.get('#lastName').type('sobrenome')
      cy.get('#phone-checkbox').click();
      cy.get('#email').type('emailail.com')
      cy.get('#open-text-area').type('oiiiiiieeeeeeee')
      cy.contains('button', 'Enviar').click();

      cy.get('.error').should('be.not.visible')
    })
  
})
