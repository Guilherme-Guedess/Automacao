const urlFront = Cypress.config("urlFront")

describe('Consultar meus pedidos', () => {
    it('visit', () => {
        cy.visit(urlFront)
    })

    it('Clicando em "Meus pedidos"', () => {
        cy.get('[href="/painel-do-cliente/pedidos"]')
    .click()
    })

    it('Preenchendo email e senha', () => {
        cy.loginFront(Cypress.env("endereco"), (Cypress.env("senha")))
    })
    
    it('Entrar', () => {
        cy.get('.wd-wrapper > :nth-child(2) > .js-login > :nth-child(2) > #widget75-submit')
        .click()
    })

    it('validação do pedido', () => {
         cy.get('.order-code').should('have.text', '00003-00569')
     })

})