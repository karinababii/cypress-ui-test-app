import pageobj from '../pageobject'

describe('Sign up', () => {

    const login = new pageobj();

    it('should should have all logos, fields, buttons etc.', () => {
        login.navigate();
        login.checkElements();
    });

    it('. User can register with valid data', () => {
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