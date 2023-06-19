const { I } = inject();
const LoginPage = require('../page_objects/login_page.js');
const HomePage = require('../page_objects/home_page.js');

module.exports = {

    seeLoginPage () {
        // const email = await I.findById(LoginPage.fields.email);
        // I.seeElement(email);
        I.seeElement('~email');
    },

    fillLogin () {
        I.fillField('~email', 'teste@teste.com');
        I.fillField('~senha', '123456');
    },

    enterLogin () {
        I.tap('~entrar');
    },

    seeHome () {
        I.wait(3);
        I.waitForElement('~salvar', 5);
        I.seeElement('~salvar');
        I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
    },

    fillLoginErrorEmail() {
        I.fillField('~email', 'teste@teste.com.br');
        I.fillField('~senha', secret('123456'));
    },

    fillLoginErrorSenha() {
        I.fillField('~email', 'teste@teste.com');
        I.fillField('~senha', '123457');
    },

    messageLoginFailed () {
        I.waitForElement('~lognFail', 5);
        I.seeElement('~lognFail');
        I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
    },

}