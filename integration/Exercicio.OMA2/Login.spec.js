/// <reference types="cypress"/>

const urlFront = Cypress.config("urlFront")

describe('Login na loja', () => {
    it('visit', () => {
        cy.visit(urlFront)
    })

    it('Clicando no "Meus pedidos"', () => {
        cy.get('[href="/painel-do-cliente/pedidos"]')
            .click()
    })

    it('Preenchendo email e senha', () => {
        cy.loginFront('atendimento@ezcommerce.com.br', '123')

    })

    it('Logando', () => {
        cy.get('.wd-wrapper > :nth-child(2) > .js-login > :nth-child(2) > #widget75-submit')
            .click()
            cy.wait(6000)
    })

    it('validação de login', () => {
        cy.wait(2000)
        cy.get('.authenticated > b').contains("Olá")
    })

})