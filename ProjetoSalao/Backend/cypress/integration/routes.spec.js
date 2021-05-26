/// <reference types="cypress"/>

describe('Should verify the routes returns', () => {
    it('Should have the message `Olá, minha primeira API`', () => {
        cy.request({
            url: 'http://localhost:3001'
        }).then((resp) => {
            expect(resp.body).to.eq('Olá, minha primeira API');
            expect(resp.status).to.eq(200);
        })
    })
})