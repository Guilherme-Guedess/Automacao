describe('Cadastrar produto', () => {
  let token

  before(() => {
    cy.getTokenOMA(`"${Cypress.env("chaveApi")}"`)
      .then(tkn => {
        token = tkn
      })
  })

  it('Criar produto', () => {

    cy.request({
      method: 'POST',
      url: '/products',
      headers: { Authorization: `Bearer ${token}` },
      body: {

        id: "556655221",
        name: "teste delite",
        sellerCategory: [
          "Roupas"
        ],
        marketplaceCategoryId: "2",
        brand: "Lascote",
        description: "teste delite",
        warranty: "100",
        status: "New",
        "variations": [
          {
            sku: "110.16667.10",
            name: "teste delite",
            identifiers: [
              {
                type: "Ean",
                value: "1234567890000"
              }
            ],
            weight: 0.2,
            height: 0.3,
            width: 0.1,
            length: 0.25,
            attributes: [
              {
                attributeID: 44,
                valueId: "517",
                valueName: "Amarelo",
                attributeType: "Attribute",
                attributeValueType: "Single"
              },
              {
                attributeID: 40,
                valueId: "793",
                valueName: "P",
                attributeType: "Attribute",
                attributeValueType: "Single"
              }
            ],
            mainImage: "https://images-submarino.b2w.io/produtos/01/00/img/1491455/3/1491455383_1GG.jpg",
            images: [
              "https://images-submarino.b2w.io/produtos/01/00/img/1491455/3/1491455383_1GG.jpg"
            ],
            status: "New",
            active: true
          }
        ]

      }

    }).as('response')

    cy.get('@response').then(res => {
      console.log(res)
      expect(res.status).to.be.equal(201)
    })
  })

})