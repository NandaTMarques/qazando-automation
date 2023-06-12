const { I } = inject();
// const LoginPage = require('./page_definitions/page_objects/login_page.js');
// const HomePage = require('./page_definitions/page_objects/home_page.js');

module.exports = {

    async seeLoginPage () {
        const email = await I.findById(LoginPage.fields.email);
        I.seeElement(email);
    },

    async fillLogin () {
        const email = await I.findById(LoginPage.fields.email);
        const password = await I.findById(LoginPage.fields.password);
        I.fillField(email, 'teste@teste.com');
        I.fillField(password, '123456');
    },

    async enterLogin () {
        const enterLogin = await I.findById(LoginPage.buttons.enter);
        I.tap(enterLogin);
    },

    async seeHome () {
        const saveStudent = await I.findById(HomePage.buttons.saveStudent);
        I.wait(3);
        I.waitForElement(saveStudent, 5);
        I.seeElement(saveStudent);
        I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
    },

    async messageLoginFailed () {
        const failmessage = await I.findById(LoginPage.messages.loginFail);
        I.seeElement(failmessage);
    },

}