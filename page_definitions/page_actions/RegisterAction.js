const { I } = inject();
const LoginPage = require('../page_objects/login_page.js');
const HomePage = require('../page_objects/home_page.js');
const RegisterStudent = require('../page_objects/register_page.js');

module.exports = {

    async seeHome () {
        I.wait(2);
        I.waitForElement('~salvar', 5);
        I.seeElement('~salvar');
        // I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
    },

    async fillCode () {
        const code = await I.findById(RegisterStudent.fields.code);
        I.fillField(code, '0617');

        // I.fillField('~codigo', '0617');
    },

    async fillStudent () {
        I.fillField('~aluno', 'Fernanda Teixeira');
    },

}