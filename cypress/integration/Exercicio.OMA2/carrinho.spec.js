const urlFront = Cypress.config("urlFront")

describe('Produto no carrinho ', () => {
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

    it("logo", () =>{
        cy.get('.background > :nth-child(1) > #logo > a')
        .click()

    })
    it("selecionar produto", () => {
        cy.get('.product-25644 > .wd-product-line > .item-description > .name > a')
        .click()
    })

    it("Produto no carrinho", () => {
        cy.get('.button > .btn')
        .click()
    })

    it("validação do carrinho", () => {
        cy.get('.instant-price').should('have.not.text','0')
    })
    })