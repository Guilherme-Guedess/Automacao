describe('Listar produto', () => {
  let token

  before(() => {
    cy.getTokenOMA(`"${Cypress.env("chaveApi")}"`)
      .then(tkn => {
        token = tkn
      })
  })




  it("Listar produto específico", () => {
    cy.request({
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
      url: '/products/556655221'
    }).as('response');

    cy.get('@response').then(res => {
      console.log(res);
      expect(res.status).to.be.equal(200)
      expect(res.body.data).to.have.property('id')
      expect(res.body.data).to.have.property('name')

    })

  })
})
