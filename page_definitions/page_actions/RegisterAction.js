const { I } = inject();
const LoginPage = require('../page_objects/login_page.js');
const HomePage = require('../page_objects/home_page.js');
const RegisterStudent = require('../page_objects/register_page.js');

module.exports = {

    seeHomeRegister () {
        const saveButton = HomePage.buttons.saveStutent;
        I.wait(1);
        I.seeElement(saveButton);
    },

    fillCode () {
        const codeField = RegisterStudent.fields.codeField;
        const code = RegisterStudent.fields.code;
        I.fillField(codeField, code);
    },

    fillStudent () {
        const studentField = RegisterStudent.fields.studentField;
        const student = RegisterStudent.fields.student;
        I.fillField(studentField, student);
    },

    saveStudent () {
        const saveButton = HomePage.buttons.saveStutent;
        I.wait(2);
        I.seeElement(saveButton);
        I.tap(saveButton);
        I.wait(2);
    },

    searchStudent () {
        const searchStudent = RegisterStudent.fields.searchStudent;
        const student = RegisterStudent.fields.student;
        const studentFound = RegisterStudent.fields.studentFound;
        I.fillField(searchStudent, student);
        I.wait(3);
        I.seeElement(studentFound);
        I.wait(2);// não é necessário, só coloquei para podermos ver o final do teste com calma
    },

    NotFillStudent () {
        const studentField = RegisterStudent.fields.studentField;
        I.fillField(studentField, '');
    },

    NotFillCode () {
        const codeField = RegisterStudent.fields.codeField;
        I.fillField(codeField, '');
    },

    ErrorNotification () {
        const msgRegisterFail = RegisterStudent.messages.msgRegisterFail;
        I.wait(2);
        I.seeElement(msgRegisterFail);
        I.wait(2);// não é necessário, só coloquei para podermos ver o final do teste com calma
    },

    cancelStudent () {
        const cancelButton = RegisterStudent.buttons.cancelButton;
        I.wait(2);
        I.seeElement(cancelButton);
        I.tap(cancelButton);
    },

    emptyCodeField () {
        const codeField = RegisterStudent.fields.codeField;
        I.wait(2);
        I.seeElement(codeField, '');
        I.wait(2);
    },

}
