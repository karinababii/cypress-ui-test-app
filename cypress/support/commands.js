// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registration', () => {
    const user = {
        firstname: 'firstname' + `${Math.round(Math.random()* 1000)}`,
        lastname: 'lastname' + `${Math.round(Math.random()* 1000)}`,
        username: 'username' + `${Math.round(Math.random()* 1000)}`,
        password: 'Qwerty1',
        bank: 'Monobank',
        routing: '012345678',
        account: '876543210'
    }
    cy.visit('http://localhost:3000/signup');
    cy.get('[data-test="signup-first-name"]').type(user.firstname);
    cy.get('[data-test="signup-last-name"]').type(user.lastname);
    cy.get('[data-test="signup-username"]').type(user.username);
    cy.get('[data-test="signup-password"]').type(user.password);
    cy.get('[data-test="signup-confirmPassword"]').type(user.password);
    cy.get('[data-test="signup-submit"]').click();
    cy.get('[data-test="signin-username"]').type(user.username);
    cy.get('[data-test="signin-password"]').type(user.password);
    cy.get('[type="submit"]').click();
    cy.get('[data-test="user-onboarding-next"]').click();
    cy.get('#bankaccount-bankName-input').type(user.bank);
    cy.get('#bankaccount-routingNumber-input').type(user.routing);
    cy.get('#bankaccount-accountNumber-input').type(user.account);
    cy.get('button.MuiButton-contained').click();
    cy.get('button.MuiButton-textPrimary').click();
});