import signinpo from '../pageobject'

describe('Login page', () => {

    const login = new signinpo();
    
    it('should have "/signin" in URL', () => {
     login.navigate();
     cy.url().should('include', '/signin')
    }); 
 
    it('should have all logos, fields, buttons etc.', () => {
       login.navigate();
       login.logo().should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
        .and('be.visible');
       login.username().should('be.visible');
       login.password().should('be.visible');
       login.rememberme().should('be.visible');
       login.checkbox().should('not.be.checked');
       login.signuplink().should('be.visible')
        .and('have.attr', 'href', '/signup');
       login.button().should('be.visible')
        .and('contain', 'Sign In');
    });
 
    it('should have placeholder "Username" in username field', () => {
       login.navigate();
       login.usermaneplaceholder().should('be.visible')
        .and('contain', 'Username');
    });
 
    it('should have placeholder "Password" in password field', () => {
       login.navigate();
       login.passwordplaceholder().should('be.visible')
        .and('contain', 'Password');
    });
 
    it('should have clickable checkbox', () => {
        login.navigate();
        login.checkbox().check().should('be.checked');
    });

 
    it('should have require username field', () => {
        login.navigate();
       login.username().click();
       login.password().click();
       login.usernamewarning().should('contain', 'Username is required')
        .and('have.css', 'color', '#f44336');
    });

    it('should have require password field', () => {
        login.navigate();
        login.password().type('q');
        login.username().click();
        login.passwordwarning().should('contain', 'Password must contain at least 4 characters')
            .and('have.css', 'color', '#f44336')
    })
 
 
 });
 
 describe('User can`t login', () => {
    
    it('with invalid username', () => {
       login.navigate();
       login.username().type('karina');
       login.password().type('karina0502');
       login.button().click();
       login.error().should('contain', 'Username or password is invalid')
        .and('be.visible');;
    });
 
    it('with invalid password', () => {
        login.navigate();
        login.username().type('karinababii');
        login.password().type('karina05');
        login.button().click();
        login.error().should('contain', 'Username or password is invalid')
            .and('be.visible');
    });
 });

 describe('User can login', () => {
   
    it('with valid data', () => {
        login.navigate()
        login.username().type('karinababii');
        login.password().type('karina0502');
        login.button().click();
       login.accountusername().should('contain', 'karinababii');
   });
 });