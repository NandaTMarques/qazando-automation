const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');
const RegisterAction = require('../page_definitions/page_actions/RegisterAction.js');


Given(/^que o usuário esteja logado na aplicação$/, async () => {
	await LoginAction.seeLoginPage();
    await LoginAction.fillLogin();
    await LoginAction.enterLogin();
});

Then(/^esteja na Home Page do sistema$/, async () => {
	await RegisterAction.seeHome();
    console.log('Tô vendo a home')
});

When(/^ele preenche o campo de código$/, async () => {
	await RegisterAction.fillCode();
    console.log('Tô preenchendo o código')
});

When(/^preenche o campo de aluno$/, async () => {
	await RegisterAction.fillStudent();
});

When(/^aciona a opção salvar$/, () => {
	return true;
});

Then(/^ele criará o cadastro do aluno com sucesso$/, () => {
	return true;
});

Given(/^que o usuário esteja logado na aplicação$/, async () => {
	await LoginAction.seeLoginPage();
    await LoginAction.fillLogin();
    await LoginAction.enterLogin();
});

Then(/^esteja na Home Page do sistema$/, async () => {
	await LoginAction.seeHome();
});

When(/^ele preenche o campo de código$/, () => {
	return true;
});

When(/^não preenche o campo de aluno$/, () => {
	return true;
});

When(/^aciona a opção salvar$/, () => {
	return true;
});

Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, () => {
	return true;
});

Given(/^que o usuário esteja logado na aplicação$/, async () => {
	await LoginAction.seeLoginPage();
    await LoginAction.fillLogin();
    await LoginAction.enterLogin();
});

Then(/^esteja na Home Page do sistema$/, async () => {
	await LoginAction.seeHome();
});

When(/^ele não preenche o campo de código$/, () => {
	return true;
});

When(/^preenche o campo de aluno$/, () => {
	return true;
});

When(/^aciona a opção salvar$/, () => {
	return true;
});

Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, () => {
	return true;
});

Given(/^que o usuário esteja logado na aplicação$/, async () => {
	await LoginAction.seeLoginPage();
    await LoginAction.fillLogin();
    await LoginAction.enterLogin();
});

Then(/^esteja na Home Page do sistema$/, async () => {
	await LoginAction.seeHome();
});

When(/^ele preenche um dos campos de aluno ou código$/, () => {
	return true;
});

When(/^aciona a opção para cancelar o cadastro$/, () => {
	return true;
});

Then(/^os campos de código e aluno serão limpos$/, () => {
	return true;
});
