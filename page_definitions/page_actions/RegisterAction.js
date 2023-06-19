const { I } = inject();
// const LoginPage = require('../page_objects/login_page.js');
// const HomePage = require('../page_objects/home_page.js');
// const RegisterStudent = require('../page_objects/register_page.js');

module.exports = {

    seeHomeRegister () {
        I.wait(1);
        I.seeElement('~salvar');
    },

    fillCode () {
        I.fillField('~codigo', '06117');
        // const code = I.findById(RegisterStudent.fields.code);
        // I.fillField(code, '0617');
        
    },

    fillStudent () {
        I.fillField('~aluno', 'Fernanda Teixeira');
    },

    saveStudent () {
        I.wait(2);
        I.seeElement('~salvar');
        I.tap('~salvar');
    },

    searchStudent () {
        I.fillField('~search', 'Fernanda Teixeira');
        I.wait(3);
        I.seeElement('//android.view.ViewGroup[@content-desc="06117"]');
    },

    NotFillStudent () {
        I.fillField('~aluno', '');
    },

    NotFillCode () {
        I.fillField('~codigo', '');
    },

    ErrorNotification () {
        I.wait(2);
        I.seeElement('Os campos devem ser preenchidos!');
    },

    cancelStudent () {
        I.wait(2);
        I.seeElement('~cancelar');
        I.tap('~cancelar');
    },

    emptyCodeField () {
        I.wait(2);
        I.seeElement('~codigo', '');
        I.wait(2);
    },

}
