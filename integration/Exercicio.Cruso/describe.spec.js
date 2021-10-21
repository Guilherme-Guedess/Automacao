/// <reference types="cypress"/>

it('A external test...',() => {

})

describe.only('Shold grup test...', () => {
    describe('Should group more specific tests...', () => {
        it.skip('A spacific test...',() => {

        })
    })

    describe('Should group more specific tests...', () => {
        it('A spacific test...',() => {

        })
    })

    it('A internal test...',() => {

    })
})