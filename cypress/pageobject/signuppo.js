import { cy } from "date-fns/locale";

class register {
    
    logo() {
        cy.get('div > svg')
    }

    firstname() {
        cy.get('[data-test="signup-first-name"]');
    }

    lastname() {
        cy.get('[data-test="signup-last-name"]')
    }

    username() {
        cy.get('[data-test="signup-username"]')
    }

    password() {
        cy.get('[data-test="signup-password"]')
    }

    confirm() {
        cy.get('[data-test="signup-confirmPassword"]')
    }

    button() {
        cy.get('[data-test="signup-submit"]')
    }

}
export default register;