const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');


Given('que o usuário esteja na tela de login', async () => {
  await LoginAction.seeLoginPage();
});

When('ele preenche os campos de e-mail e senha com credenciais validas', async () => {
  await LoginAction.fillLogin();
});

When('aciona a opção para logar', async () => {
  await LoginAction.enterLogin();
});

Then('ele acessará a home do sistema', async () => {
  await LoginAction.seeHome();
});


Given(/^que o usuário esteja na tela de login$/, async () => {
  await LoginAction.seeLoginPage();
});

When(/^ele preenche os campos de e-mail inválido e senha valida$/, async () => {
	await LoginAction.fillLoginErrorEmail();
});

When(/^aciona a opção para logar$/, async () => {
  await LoginAction.enterLogin();
});

Then(/^ele verá uma mensagem de erro no login$/, async () => {
  await LoginAction.messageLoginFailed();
});


Given(/^que o usuário esteja na tela de login$/, async () => {
  await LoginAction.seeLoginPage();
});

When(/^ele preenche os campos de e-mail válido e senha inválida$/, async () => {
	await LoginAction.fillLoginErrorSenha();
});

When(/^aciona a opção para logar$/, async () => {
  await LoginAction.enterLogin();
});

Then(/^ele verá uma mensagem de erro no login$/, async () => {
	await LoginAction.messageLoginFailed();
});
