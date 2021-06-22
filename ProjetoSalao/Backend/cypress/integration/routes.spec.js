/// <reference types="cypress"/>

it('Should consult first endpoint', () => {
    cy.request({
        url: 'http://localhost:3000/'
    }).then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.eq('Projeto em execução!')
    })
});