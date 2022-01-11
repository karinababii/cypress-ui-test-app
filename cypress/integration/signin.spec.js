import { cy } from 'date-fns/locale';
import login from '../pageobject/signinpo';

describe('Login page', () => {

    const Login = new login();
    
    it('should have "/signin" in URL', () => {
     cy.visit('/');
     cy.url().should('include', '/signin');
    }); 
 
    it('should have all logos, fields, buttons etc.', () => {
        cy.visit('/');
       Login.logo().should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
        .and('be.visible');
       Login.username().should('be.visible');
       Login.password().should('be.visible');
       Login.rememberme().should('be.visible');
       Login.checkbox().should('not.be.checked');
       Login.signuplink().should('be.visible')
        .and('have.attr', 'href', '/signup');
       Login.button().should('be.visible')
        .and('contain', 'Sign In');
    });
 
    it('should have placeholder "Username" in username field', () => {
        cy.visit('/');
       Login.usermaneplaceholder().should('be.visible')
        .and('contain', 'Username');
    });
 
    it('should have placeholder "Password" in password field', () => {
        cy.visit('/');
       Login.passwordplaceholder().should('be.visible')
        .and('contain', 'Password');
    });
 
    it('should have clickable checkbox', () => {
        cy.visit('/');
        Login.checkbox().check().should('be.checked');
    });

 
    it('should have require username field', () => {
        cy.visit('/');
       Login.username().click();
       Login.password().click();
       Login.usernamewarning().should('contain', 'Username is required')
        .and('have.css', 'color', '#f44336');
    });

    it('should have require password field', () => {
        cy.visit('/');
        Login.password().type('q');
        Login.username().click();
        Login.passwordwarning().should('contain', 'Password must contain at least 4 characters')
            .and('have.css', 'color', '#f44336')
    })
 
 
 });
 
 describe('User can`t login', () => {
    
    it('with invalid username', () => {
        cy.visit('/');
       Login.username().type('karina');
       Login.password().type('karina0502');
       Login.button().click();
       Login.error().should('contain', 'Username or password is invalid')
        .and('be.visible');;
    });
 
    it('with invalid password', () => {
        cy.visit('/');
        Login.username().type('karinababii');
        Login.password().type('karina05');
        Login.button().click();
        Login.error().should('contain', 'Username or password is invalid')
            .and('be.visible');
    });
 });

 describe('User can login', () => {
   
    it('with valid data', () => {
        cy.visit('/');
        cy.intercept('POST', '/login', {
            fixture: signin.json,
        });
        Login.username().type('karinababii');
        Login.password().type('karina0502');
        Login.button().click();
       Login.accountusername().should('contain', 'karinababii');
   });
 });