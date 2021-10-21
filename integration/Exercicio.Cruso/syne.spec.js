/// <reference types="cypress"/>

describe('Esperas...' , () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo')
        .should('not.exist')
        cy.get('#buttonDelay')
        .click()
        cy.get('#novoCampo')
        .should('not.exist')
        cy.get('#novoCampo')
        cy.get('#novoCampo')
        .should('exist')
        cy.get('#novoCampo')
        .type('funcionando')
    } )

    it.only('deve aguardar elemento estar disponivel', () => {
        cy.get('#buttonDelay')
        .click()
        cy.get('#novoCampo')
        .should('exist')
    } )

    it.only('uso do find', () => {
        cy.get('#buttonList')
        .click()
        cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 1')

        //cy.get('#lista li')
        //.find('span')
        cy.get('#lista li span')
        .should('contain', 'Item 2')


    })

    it.only('Uso do timeout', () => {
       // cy.get('#buttonDelay')
        //.click()
      // cy.get('#novoCampo')
       // .should('exist')

       cy.get('#buttonList')
       .click()
       cy.get('#Lista li span')
       .should('have.length', 1)
       cy.get('#Lista li span')
       .should('have.length', 2)

    })
})
