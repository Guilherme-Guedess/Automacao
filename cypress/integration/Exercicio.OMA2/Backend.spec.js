/// <reference types="cypress" />

const urlBack = Cypress.config("urlBack")

describe('Should test at a afunctional level', () => {

    let token

    before(() => {
        cy.getToken(`${"email"}`, `"${"senha"}"`)
            .then(tkn => {
                token = tkn
            })
    })

    beforeEach(() => {
        cy.resetRest()
    })

    it('Shold create an account', () => {
        cy.request({
            url: urlBack +'/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'conta via rest'
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'conta via rest')
        })

    })

    it('Alterar Conta', () => {
        cy.request({
            method: 'GET',
            url:urlBack +'/contas',
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: 'Conta para alterar'
            }

        }).then(res => {
            cy.request({
                url: urlBack  +`/contas/${res.body[0].id}`,
                method: 'PUT',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: 'conta alterada via rest'
                }
            }).as('response')
            cy.get('@response').its('status').should('be.equal', 200)
        })
    })
    it("Criando uma conta com o mesmo nome", () => {
        cy.request({
            url: urlBack  +'/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'conta mesmo nome'
            }
        }).as('response')

        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('nome', 'conta mesmo nome')
        })
    })

    it("transicao de contas", () => {
        cy.getContaByname('Conta para movimentacoes')
            .then(contaId => {
                cy.request({
                    method: 'POST',
                    url: urlBack + '/transacoes',
                    headers: { Authorization: `JWT ${token}` },
                    body: {
                        conta_id: contaId,
                        data_pagamento: Cypress.moment().add({ days: 1 }).format('DD/MM/YYYY'),
                        data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                        descricao: "São paulo",
                        envolvido: "ghghghjm",
                        status: true,
                        tipo: "REC",
                        valor: "123"
                    }

                }).as('response')


            })
        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')
    })

    it.only('removendo transições', () => {
        cy.request({
            method: 'GET',
            url: urlBack +'/transacoes',
            headers: { Authorization: `JWT ${token}` },
            qs: {descricao: 'Movimentacao para exclusao'}
        }).then(res => {
            cy.request({
                url: urlBack +`/transacoes/${res.body[0].id}`,
                method: 'DELETE',
                headers: { Authorization: `JWT ${token}` },
            }).its('status').should('be.equal', 204)
        })
    })
})