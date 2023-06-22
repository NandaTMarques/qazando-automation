const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');


Given('que o usuário esteja na tela de login', () => {
  LoginAction.seeLoginPage();
});

When('ele preenche os campos de e-mail e senha com credenciais validas', () => {
  LoginAction.fillLogin();
});

When('aciona a opção para logar', () => {
  LoginAction.enterLogin();
});

Then('ele acessará a home do sistema', () => {
  LoginAction.seeHome();
});


Given(/^que o usuário esteja na tela de login$/, () => {
  LoginAction.seeLoginPage();
});

When(/^ele preenche os campos de e-mail inválido e senha valida$/, () => {
	LoginAction.fillLoginErrorEmail();
});

When(/^aciona a opção para logar$/, () => {
  LoginAction.enterLogin();
});

Then(/^ele verá uma mensagem de erro no login$/, () => {
  LoginAction.messageLoginFailed();
});


Given(/^que o usuário esteja na tela de login$/, () => {
  LoginAction.seeLoginPage();
});

When(/^ele preenche os campos de e-mail válido e senha inválida$/, () => {
	LoginAction.fillLoginErrorSenha();
});

When(/^aciona a opção para logar$/, () => {
  LoginAction.enterLogin();
});

Then(/^ele verá uma mensagem de erro no login$/, () => {
	LoginAction.messageLoginFailed();
});
