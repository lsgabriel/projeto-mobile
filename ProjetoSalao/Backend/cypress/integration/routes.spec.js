/// <reference types="cypress"/>

describe('Should verify the routes returns', () => {
    it('Should have the message `Projeto em execução!`', () => {
        cy.request({
            url: 'http://localhost:3000/'
        }).then((resp) => {
            expect(resp.body).to.eq('Projeto em execução!');
            expect(resp.status).to.eq(200);
        })
    })
})
