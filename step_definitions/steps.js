const { I } = inject();


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
