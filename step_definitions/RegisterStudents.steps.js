const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');
const RegisterAction = require('../page_definitions/page_actions/RegisterAction.js');


Given(/^que o usuário esteja logado na aplicação$/, () => {
	LoginAction.seeLoginPage();
    LoginAction.fillLogin();
    LoginAction.enterLogin();
});

Then(/^ele esteja na Home Page do sistema$/, () => {
	RegisterAction.seeHomeRegister();
});

When(/^ele preenche o campo de código$/, () => {
	RegisterAction.fillCode();
});

When(/^preenche o campo de aluno$/, () => {
	RegisterAction.fillStudent();
});

When(/^aciona a opção salvar$/, () => {
	RegisterAction.saveStudent();
});

Then(/^ele criará o cadastro do aluno com sucesso$/, () => {
	RegisterAction.searchStudent();
});


When(/^ele preenche o campo de código$/, () => {
	RegisterAction.fillCode();
});

When(/^não preenche o campo de aluno$/, () => {
	RegisterAction.NotFillStudent();
});

When(/^aciona a opção salvar$/, () => {
	RegisterAction.saveStudent();
});

Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, () => {
	RegisterAction.ErrorNotification();
});


When(/^ele não preenche o campo de código$/, () => {
	RegisterAction.NotFillCode();
});

When(/^preenche o campo de aluno$/, () => {
	RegisterAction.fillStudent();
});

When(/^aciona a opção salvar$/, () => {
	RegisterAction.saveStudent();
});

Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, () => {
	RegisterAction.ErrorNotification();
});

When(/^ele preenche um dos campos de aluno ou código$/, () => {
	RegisterAction.fillCode();
});

When(/^aciona a opção para cancelar o cadastro$/, () => {
	RegisterAction.cancelStudent();
});

Then(/^os campos de código e aluno serão limpos$/, () => {
	RegisterAction.emptyCodeField();
});
