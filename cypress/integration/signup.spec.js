import { cy } from 'date-fns/locale';
import register from '../pageobject/signuppo'

describe('Sign up', () => {

    const regist = new register();

    it('should should have all logos, fields, buttons etc.', () => {
        cy.visit('/signup');
        regist.logo().should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
        .and('be.visible');
        regist.firstname().should('be.visible');
        regist.lastname().should('be.visible');
        regist.username().should('be.visible');
        regist.password().should('be.visible');
        regist.confirm().should('be.visible');
        regist.button().should('be.visible');
    });

    it('. User can register with valid data', () => {
        cy.registration();
    });
});