Cypress.Commands.add('createUser', (username, email, password) => {
    cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/register', {
        username: username,
        email: email,
        password: password
    }).then(response => {
        expect(response.status).to.eq(201);
        cy.log('User created:', response.body);
    });

Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'https://practice.expandtesting.com/notes/api/auth/login', // Assurez-vous que l'URL est correcte
        body: {
            email: email,
            password: password
        }
    }).then(response => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.token).as('authToken');
    });
});

});

