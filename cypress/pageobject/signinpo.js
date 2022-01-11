class login {
    
    logo() {
       return cy.get('div > svg')
    }

    username() {
       return cy.get('[data-test="signin-username"]')
    }

    password() {
       return cy.get('[data-test="signin-password"]')
    }

    rememberme() {
        cy.get('.MuiFormControlLabel-root')
    }

    checkbox() {
        cy.get('.PrivateSwitchBase-input-14')
    }

    signuplink() {
        cy.get('[data-test="signup"]')
    }

    button() {
        cy.get('[type="submit"]')
    }

    usernameplaceholder() {
        cy.get('#username-label')
    }
    
    passwordplaceholder() {
        cy.get('#password-label')
    }

    usernamewarning() {
        cy.get('#username-helper-text')
    }

    passwordwarning() {
        cy.get('#password-helper-text')
    }


    error() {
        cy.get('.MuiAlert-message')
    }

    accountusername() {
        cy.get('[data-test="sidenav-username"]')
    }

    navigatesignup() {
        cy.visit('http://localhost:3000/signup');
    }

}
export default login;