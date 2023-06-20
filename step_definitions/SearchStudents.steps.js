const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');
const RegisterAction = require('../page_definitions/page_actions/RegisterAction.js');
const SearchAction = require('../page_definitions/page_actions/SearchAction.js');

Given(/^que o usuário esteja logado na aplicação$/, () => {
	LoginAction.seeLoginPage();
    LoginAction.fillLogin();
    LoginAction.enterLogin();
});

Then(/^ele esteja na Home Page do sistema$/, () => {
	RegisterAction.seeHomeRegister();
});


Then(/^ele preenche o campo de busca$/, () => {
	SearchAction.searchStudent();
});

When(/^ele verá o cadastro do aluno buscado$/, () => {
	SearchAction.seeStudent();
});


Then(/^ele desliza a tela para cima$/, () => {
	SearchAction.slideScreen();
});

When(/^ele verá o cadastro do aluno com sucesso$/, () => {
	SearchAction.searchStudentAfterScroll();
});

