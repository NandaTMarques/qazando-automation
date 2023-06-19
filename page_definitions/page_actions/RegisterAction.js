const { I } = inject();
// const LoginPage = require('../page_objects/login_page.js');
// const HomePage = require('../page_objects/home_page.js');
// const RegisterStudent = require('../page_objects/register_page.js');

module.exports = {

    async seeHomeRegister () {
        await I.wait(1);
        await I.seeElement('~salvar');
    },

    async fillCode () {
        await I.fillField('~codigo', '06117');
        // const code = await I.findById(RegisterStudent.fields.code);
        // I.fillField(code, '0617');
        
    },

    async fillStudent () {
        await I.fillField('~aluno', 'Fernanda Teixeira');
    },

    async saveStudent () {
        await I.wait(2);
        await I.seeElement('~salvar');
        await I.tap('~salvar');
    },

    async searchStudent () {
        await I.fillField('~search', 'Fernanda Teixeira');
        await I.wait(3);
        await I.seeElement('//android.view.ViewGroup[@content-desc="06117"]');
    },

    async NotFillStudent () {
        await I.fillField('~aluno', '');
    },

    async NotFillCode () {
        await I.fillField('~codigo', '');
    },

    async ErrorNotification () {
        await I.wait(2);
        await I.seeElement('Os campos devem ser preenchidos!');
    },

    async cancelStudent () {
        await I.wait(2);
        await I.seeElement('~cancelar');
        await I.tap('~cancelar');
    },

    async emptyCodeField () {
        await I.wait(2);
        await I.seeElement('~codigo', '');
        await I.wait(2);
    },

}
