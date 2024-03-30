/// <reference types = "Cypress" />

describe('Technical Test TE Flip', () => {
    it('Get todos, make sure it shows only 10 items', { env: { snapshotOnly: true } }, () => {
        cy.getTodos()
    });
    it('Get users with status inactive, make sure it shows correct data', { env: { snapshotOnly: true } }, () => {
        cy.getUsers()
        cy.getUsersWithParams()
    });
});