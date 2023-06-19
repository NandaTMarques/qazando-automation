const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');
const RegisterAction = require('../page_definitions/page_actions/RegisterAction.js');
const SearchAction = require('../page_definitions/page_actions/SearchAction.js');

Given(/^que o usuário esteja logado na aplicação$/, async () => {
	await LoginAction.seeLoginPage();
    await LoginAction.fillLogin();
    await LoginAction.enterLogin();
});

Then(/^ele esteja na Home Page do sistema$/, async () => {
	await RegisterAction.seeHomeRegister();
});


Then(/^ele preenche o campo de busca$/, async () => {
	await SearchAction.searchStudent();
});

When(/^ele verá o cadastro do aluno buscado$/, async () => {
	await SearchAction.seeStudent();
});


Then(/^ele desliza a tela para cima$/, async () => {
	await SearchAction.slideScreen();
});

When(/^ele verá o cadastro do aluno com sucesso$/, async () => {
	await SearchAction.searchStudentAfterScroll();
});

