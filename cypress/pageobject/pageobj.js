const { cy } = require("date-fns/locale");

class login {
    navigate() {
        cy.visit('http://localhost:3000')
    }

    checkurl() {
        cy.url().should('include', '/signin')
    }

    ckecklogo() {
        cy.get('svg').should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
        .and('be.visible');
    }

    username() {
        cy.get('div.MuiFormControl-root:nth-child(1)').should('be.visible');
    }

    password() {
        cy.get('div.MuiFormControl-root:nth-child(2)').should('be.visible');
    }

    checkrememberme() {
        cy.get('.MuiFormControlLabel-root').should('be.visible');
    }

    checkbox() {
        cy.get('.PrivateSwitchBase-input-14').should('not.be.checked');
    }

    checksignup() {
        cy.get('div.MuiGrid-root:nth-child(2) > a:nth-child(1)').should('be.visible').and('have.attr', 'href', '/signup');
    }

    checkbutton() {
        cy.get('button.MuiButtonBase-root').should('exist');
    }

    usernameplaceholder() {
        cy.get('div.MuiFormControl-root:nth-child(1)').should('contain', 'Username');
    }
    
    passwordplaceholder() {
        cy.get('div.MuiFormControl-root:nth-child(2)').should('contain', 'Password');
    }

    requiredfield() {
        cy.get('#username-helper-text').should('contain', 'Username is required');
    }

    register() {
        cy.visit('http://localhost:3000/signup');
       cy.get('div.MuiFormControl-root:nth-child(1)').type('Karina1');
       cy.get('div.MuiFormControl-root:nth-child(2)').type('Babii1');
       cy.get('div.MuiFormControl-root:nth-child(3)').type('karinababii1');
       cy.get('div.MuiFormControl-root:nth-child(4)').type('karina0502');
       cy.get('div.MuiFormControl-root:nth-child(5)').type('karina0502');
       cy.get('[data-test="signup-submit"]').click();
    }

    invalid() {
        cy.get('.MuiAlert-message').should('contain', 'Username or password is invalid').and('be.visible');
    }
    
    addcard() {
        cy.get('[data-test="user-onboarding-next"]').click();
       cy.get('#bankaccount-bankName-input').type('Monobank');
       cy.get('#bankaccount-routingNumber-input').type('012345678');
       cy.get('#bankaccount-accountNumber-input').type('876543210');
       cy.get('button.MuiButton-contained').click();
       cy.get('button.MuiButton-textPrimary').click();
    }

    checkaccount() {
        cy.get('[data-test="sidenav-username"]').should('contain', 'karinababii3');
    }

    navigatesignup() {
        cy.visit('http://localhost:3000/signup');
    }

    checkElements() {
        cy.get('svg').should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
         .and('be.visible');
         cy.get('div.MuiFormControl-root:nth-child(1)').should('be.visible');
        cy.get('div.MuiFormControl-root:nth-child(2)').should('be.visible');
        cy.get('div.MuiFormControl-root:nth-child(3)').should('be.visible');
        cy.get('div.MuiFormControl-root:nth-child(4)').should('be.visible');
        cy.get('div.MuiFormControl-root:nth-child(5)').should('be.visible');
        cy.get('[data-test="signup-submit"]').should('exist');
    }
}
export default login;