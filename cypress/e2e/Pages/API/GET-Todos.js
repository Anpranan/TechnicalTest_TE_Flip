Cypress.Commands.add('getTodos', () => {
    cy.fixture('env').then((env) => {
        const host = env.host
        cy.log(host)

        cy.api({
            method: 'GET',
            url: host + '/public/v2/todos',
            headers: {
                'Authorization' : ''
            },
        }).then ((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array'); // Pastikan respons berupa array
            const firstTenData = response.body.slice(0, 10); // Ambil hanya 10 data pertama 
            firstTenData.forEach(item => {
                cy.log(`ID: ${item.id}, User ID: ${item.user_id}, Title: ${item.title}, Completed: ${item.status}`);
            });

            // Pastikan hanya ada 10 data yang ditampilkan
            expect(firstTenData.length).to.eq(10);
        });
    });
});