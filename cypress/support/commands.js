import loc from './Locators'

const urlBack = Cypress.config("urlBack")

Cypress.Commands.add('clickAlert', (user, passwd) => {
    cy.get(locador).click()
    cy.on('window:alert', msg => {
        expect(msg).to.be.equal(message)
    })
})

Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type('e@e.com')
    cy.get(loc.LOGIN.PASSWD).type('12345')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
})

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: urlBack +'/signin',
        body: {
            email: 'e@e.com',
            redirecionar: false,
            senha: '12345'
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
        })
})

Cypress.Commands.add('resetRest', () => {
    cy.getToken('e@e.com', '12345').then(token => {
        cy.request({
            method: 'GET',
            url: urlBack +'/reset',
            headers: { Authorization: `JWT ${token}` }
        }).its('status').should('be.equal', 200)

    })

})

Cypress.Commands.add('getContaByname', name => {
    cy.getToken('e@e.com', '12345').then(token => {
        cy.request({
            url: urlBack +'/contas',
            method: 'GET',
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: name
            }
        }).then(res => {
            return res.body[0].id
        })

    })
})

Cypress.Commands.add('getTokenOMA', (chaveDeAPI) => {
    cy.request({
        method: 'POST',
        url: 'https://api.linxcommerce.io/identity/v1/accessToken',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: chaveDeAPI
    }).then(Response => {
        console.log(chaveDeAPI)
        console.log(Response)
        return Response.body.model.token
    })
})

Cypress.Commands.add('loginFront', (email,senha) => {
    cy.get('.wd-wrapper > :nth-child(2) > .js-login > :nth-child(1) > #widget75-email')
    .type ("atendimento@ezcommerce.com.br")
    
    cy.get('.wd-wrapper > :nth-child(2) > .js-login > :nth-child(2) > #widget75-password')
    .type("123")
})