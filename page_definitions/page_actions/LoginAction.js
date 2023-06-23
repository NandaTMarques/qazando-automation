const { I } = inject();
const LoginPage = require('../page_objects/login_page.js');
const HomePage = require('../page_objects/home_page.js');

module.exports = {

    seeLoginPage () {
        const email = LoginPage.fields.emailField;
        I.seeElement(email);
    },

    fillLogin () {
        const emailField = LoginPage.fields.emailField;
        const passwordField = LoginPage.fields.passwordField;
        const email = LoginPage.text.email;
        const password = LoginPage.text.password;
        // pause();
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
        // I.see(saveButton); // exemplo do see, vai dar erro
        I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
    },

    fillLoginErrorEmail() {
        const emailField = LoginPage.fields.emailField;
        const passwordField = LoginPage.fields.passwordField;
        const wrongEmail = LoginPage.text.wrongEmail;
        const password = LoginPage.text.password;
        I.fillField(emailField, wrongEmail);
        I.fillField(passwordField, secret(password));
    },

    fillLoginErrorSenha() {
        const emailField = LoginPage.fields.emailField;
        const passwordField = LoginPage.fields.passwordField;
        const email = LoginPage.text.email;
        const wrongPassword = LoginPage.text.wrongPassword;
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