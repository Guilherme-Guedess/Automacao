/// <reference types="cypress"/>


describe('Trabalhar com elementos basicos', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })


    it('texto', () => {
        //verificação muito abrangente
        cy.get('body').should('contain', 'Cuidado')
        //verificação mais especifica
        cy.get('span').should('contain', 'Cuidado')
        //verificando diretamente 
        cy.get('.facilAchar').should('contain', 'Cuidado')
    })

    it('links', () => {
        //clicar e consutar um elemento utilizando um id ou class
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        //clicar e consutar um elemento utilizando diretamente a palavra
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })
        //interagindo com campo de texto
    it('CamposDeTexto', () => {
        cy.get('#formNome').type('Cypress text')
        cy.get('#formNome').should('have.value', 'Cypress text')
        //quando tiver ':' em alguma nome de elemento é preciso utilizar \\ para que o cypress entenda
        cy.get('#elementosForm\\:sugestoes')
        .type('texte do cypress')
        .should('have.value', 'texte do cypress')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('????')

        cy.get('[data-cy=dataSobrenome]')
        .type('teste1234{backspace}{backspace}')
        .should('have.value', 'teste12')

        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('erro{selectall}certo')
        .should('have.value', 'certo')
    
    })
        //marcar botoes de multiplas escolhas
    it('RadioButton', () =>{
      cy.get('#formSexoFem')
      .click()
      .should('be.checked')

       cy.get('#formSexoMasc')
        .should('not.be.checked')
        //busca por propriedades
       cy.get("[name=formSexo]").should('have.length', 2)

    })

    it.only('Checkbox', () =>{
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')
        cy.get('[name=formComidaFavorita]')
        .click({ multiple: true })
        cy.get('#formComidaFavorita > tbody > tr > :nth-child(3)')
        .should('not.be.checked')
    })
        //para validar um combo ele precisa ser indentificado pelo value
    it.only('combo', () => {
        cy.get('[data-test=dataEscolaridade]')
        .select('2grauincomp')
        .should('have.value', '2grauincomp')

        cy.get('[data-test=dataEscolaridade]')
        .select('1grauincomp')
        .should('have.value', '1grauincomp')

        //TODO Validar as opções de combo 
    })

    it.only('combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao', 'futebol', 'Karate'])

        //TODO validar opções selecionadas do campo multiplo 
    })
})