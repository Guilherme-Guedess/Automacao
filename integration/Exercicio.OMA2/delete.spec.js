describe('Deletando produto', () => {
  let token

  before(() => {
    cy.getTokenOMA(`"${Cypress.env("chaveApi")}"`)
      .then(tkn => {
        token = tkn
      })
  })

  it.only("Listar produto específico", () => {
    cy.request({
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
      url: '/products/556655221'
    }).as('response');

    cy.get('@response').then(res => {
      console.log(res);
      expect(res.status).to.be.equal(204)
    })

  })
})
