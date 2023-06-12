const { I } = inject();
// const LoginAction = require('../page_definitions/page_actions/LoginAction.js');

Given('que o usuário esteja na tela de login', () => {
  I.seeElement('~email');
});

When('ele preenche os campos de e-mail e senha com credenciais validas', () => {
  I.fillField('~email', 'teste@teste.com');
  I.fillField('~senha', '123456');
});

When('aciona a opção para logar', () => {
  I.tap('~entrar');
});

Then('ele acessará a home do sistema', () => {
  I.wait(3);
  I.waitForElement('~salvar', 5);
  I.seeElement('~salvar');
  I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
});

// Given('que o usuário esteja na tela de login', async () => {
//   await LoginAction.seeLoginPage();
// });

// When('ele preenche os campos de e-mail e senha com credenciais validas', async () => {
//   await LoginAction.fillLogin();
// });

// When('aciona a opção para logar', async () => {
//   await LoginAction.enterLogin();
// });

// Then('ele acessará a home do sistema', async () => {
//   await LoginAction.seeHome();
// });


Given(/^que o usuário esteja na tela de login$/, () => {
	I.seeElement('~email');
});

When(/^ele preenche os campos de e-mail inválido e senha valida$/, () => {
	I.fillField('~email', 'teste@teste.com.br');
  I.fillField('~senha', '123456');
});

When(/^aciona a opção para logar$/, () => {
  I.tap('~entrar');
});

Then(/^ele verá uma mensagem de erro no login$/, () => {
	I.waitForElement('~lognFail', 5);
  I.seeElement('~lognFail');
  I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
});


Given(/^que o usuário esteja na tela de login$/, () => {
	I.seeElement('~email');
});

When(/^ele preenche os campos de e-mail válido e senha inválida$/, () => {
	I.fillField('~email', 'teste@teste.com');
  I.fillField('~senha', '123457');
});

When(/^aciona a opção para logar$/, () => {
  I.tap('~entrar');
});

Then(/^ele verá uma mensagem de erro no login$/, () => {
	I.waitForElement('~lognFail', 5);
  I.seeElement('~lognFail');
  I.wait(2); // não é necessário, só coloquei para podermos ver o final do teste com calma
});
