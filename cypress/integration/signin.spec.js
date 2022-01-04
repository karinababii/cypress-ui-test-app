import pageobj from '../pageobject'

describe('Login page', () => {

    const login = new pageobj();
    
    it('should have "/signin" in URL', () => {
     login.navigate();
     login.checkurl();
    }); 
 
    it('should have all logos, fields, buttons etc.', () => {
       login.navigate();
       login.checklogo();
       login.username();
       login.password();
       login.checkrememberme();
       login.checkbox();
       login.checksignup();
       login.checkbutton();
    });
 
    it('should have placeholder "Username" in username field', () => {
       login.navigate();
       login.usermaneplaceholder();
    });
 
    it('should have placeholder "Password" in password field', () => {
       login.navigate();
       login.passwordplaceholder();
    });
 
    it('should have clickable checkbox', () => {
        login.navigate();
        login.checkbox().check().should('be.checked');
    });

 
    it('should have require username field', () => {
       login.navigate();
       login.username().click();
       login.password().click();
       login.requiredfield();
    });
 
 
 });
 
 describe('User can`t login', () => {
    
    it('with invalid username', () => {
       login.register();
       login.checkurl();
       login.username().type('karina');
       login.password().type('karina0502');
       login.button().click();
       login.invalid();
    });
 
    it('with invalid password', () => {
        login.register();
        login.checkurl();
        login.username().type('karinababii1');
        login.password().type('karina05');
        login.button().click();
        login.invalid();
    });
 });

 describe('User can login', () => {
   
    it('with valid data', () => {
        login.register();
        login.checkurl();
        login.username().type('karinababii1');
        login.password().type('karina0502');
        login.button().click();
        login.invalid();
       login.addcard();
       login.checkaccount();
   });
 });