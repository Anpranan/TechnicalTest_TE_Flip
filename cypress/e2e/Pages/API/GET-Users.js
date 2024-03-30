Cypress.Commands.add('getUsers', () => {
    cy.fixture('env').then((env) => {
        const host = env.host

        cy.api({
            method: 'GET',
            url: host + '/public/v2/users',
            headers: {
                'Authorization' : ''
            },
        }).then ((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array'); // Pastikan respons berupa array
            const inactiveData = response.body.filter(item => item.status === 'inactive');  // Filter data yang memiliki status inactive
            inactiveData.forEach(item => {
                cy.log(`ID: ${item.id}, Name: ${item.name}, Email: ${item.email}, Gender: ${item.gender}, Status: ${item.status}`);
                expect(item.status).to.equal('inactive');
            }); // Tampilkan data yang memiliki status inactive
            expect(inactiveData.length).to.be.greaterThan(0); // Pastikan ada data dengan status inactive
        });
    });
});

Cypress.Commands.add('getUsersWithParams', () => {
    cy.fixture('env').then((env) => {
        const host = env.host

        cy.api({
            method: 'GET',
            url: host + '/public/v2/users?status=inactive',
            headers: {
                'Authorization' : ''
            },
        }).then ((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array'); // Pastikan respons berupa array
            const inactiveData = response.body.filter(item => item.status === 'inactive');  // Filter data yang memiliki status inactive
            inactiveData.forEach(item => {
                cy.log(`ID: ${item.id}, Name: ${item.name}, Email: ${item.email}, Gender: ${item.gender}, Status: ${item.status}`);
                expect(item.status).to.equal('inactive');
            }); // Tampilkan data yang memiliki status inactive
            expect(inactiveData.length).to.be.greaterThan(0); // Pastikan ada data dengan status inactive
        });
    });
});