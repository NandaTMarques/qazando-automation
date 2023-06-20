const { I } = inject();
const LoginPage = require('../page_objects/login_page.js');
const HomePage = require('../page_objects/home_page.js');

module.exports = {

    seeLoginPage () {
        const email = LoginPage.fields.email;
        I.seeElement(email);
    },

    fillLogin () {
        const emailField = LoginPage.fields.email;
        const passwordField = LoginPage.fields.password;
        const email = LoginPage.fields.emailLogin;
        const password = LoginPage.fields.passwordLogin
        I.fillField(emailField, email);
        I.fillField(passwordField, password);
    },

    enterLogin () {
        const toEnter = LoginPage.buttons.enter;
        I.tap(toEnter);
    },

    seeHome () {
        const saveButton = HomePage.buttons.saveStutent;
        I.wait(3);
        I.waitForElement(saveButton, 5);
        I.seeElement(saveButton);
        I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
    },

    fillLoginErrorEmail() {
        const emailField = LoginPage.fields.email;
        const passwordField = LoginPage.fields.password;
        const wrongEmail = LoginPage.fields.wrongEmail;
        const password = LoginPage.fields.passwordLogin
        I.fillField(emailField, wrongEmail);
        I.fillField(passwordField, secret(password));
    },

    fillLoginErrorSenha() {
        const emailField = LoginPage.fields.email;
        const passwordField = LoginPage.fields.password;
        const email = LoginPage.fields.emailLogin;
        const wrongPassword = LoginPage.fields.wrongPassword;
        I.fillField(emailField, email);
        I.fillField(passwordField, wrongPassword);
    },

    messageLoginFailed () {
        const loginFail = LoginPage.messages.loginFail;
        I.waitForElement(loginFail, 5);
        I.seeElement(loginFail);
        I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
    },

}