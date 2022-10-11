Feature('login');

Scenario('Login with success', ({ I }) => {
    I.fillField('~email', 'teste@teste.com');
    I.fillField('~senha', '123456');
    I.tap('~entrar');
    I.waitForElement('~salvar', 5);
    I.seeElement('~salvar');
});

Scenario('Login with error', ({ I }) => {
    I.fillField('~email', 'teste@teste.com.br');
    I.fillField('~senha', '123456');
    I.tap('~entrar');
    I.waitForElement('~lognFail', 5);
    I.seeElement('~lognFail');
});
