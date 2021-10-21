/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it.only('deve visitar uma pagina e fazer uma acertiva no titulo', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', ' de ')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', ' de ')
    })

    it('encontrar e interagir com um elemento', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})