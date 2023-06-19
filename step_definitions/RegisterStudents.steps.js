const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');
const RegisterAction = require('../page_definitions/page_actions/RegisterAction.js');


Given(/^que o usuário esteja logado na aplicação$/, async () => {
	await LoginAction.seeLoginPage();
    await LoginAction.fillLogin();
    await LoginAction.enterLogin();
});

Then(/^ele esteja na Home Page do sistema$/, async () => {
	await RegisterAction.seeHomeRegister();
});

When(/^ele preenche o campo de código$/, async () => {
	await RegisterAction.fillCode();
});

When(/^preenche o campo de aluno$/, async () => {
	await RegisterAction.fillStudent();
});

When(/^aciona a opção salvar$/, async () => {
	await RegisterAction.saveStudent();
});

Then(/^ele criará o cadastro do aluno com sucesso$/, async () => {
	await RegisterAction.searchStudent();
});


When(/^ele preenche o campo de código$/, async () => {
	await RegisterAction.fillCode();
});

When(/^não preenche o campo de aluno$/, async () => {
	await RegisterAction.NotFillStudent();
});

When(/^aciona a opção salvar$/, async () => {
	await RegisterAction.saveStudent();
});

Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, async () => {
	await RegisterAction.ErrorNotification();
});


When(/^ele não preenche o campo de código$/, async () => {
	await RegisterAction.NotFillCode();
});

When(/^preenche o campo de aluno$/, async () => {
	await RegisterAction.fillStudent();
});

When(/^aciona a opção salvar$/, async () => {
	await RegisterAction.saveStudent();
});

Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, async () => {
	await RegisterAction.ErrorNotification();
});

When(/^ele preenche um dos campos de aluno ou código$/, async () => {
	await RegisterAction.fillCode();
});

When(/^aciona a opção para cancelar o cadastro$/, async () => {
	await RegisterAction.cancelStudent();
});

Then(/^os campos de código e aluno serão limpos$/, async () => {
	await RegisterAction.emptyCodeField();
});
