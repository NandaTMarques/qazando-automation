const { I } = inject();
const LoginAction = require('../page_definitions/page_actions/LoginAction.js');
const RegisterAction = require('../page_definitions/page_actions/RegisterAction.js');


Given(/^que o usuário esteja na Home Page do sistema$/, async () => {
	await LoginAction.seeLoginPage();
    await LoginAction.fillLogin();
    await LoginAction.enterLogin();
	await RegisterAction.seeHomeRegister();
});

When(/^ele preenche os campos de código e aluno$/, async () => {
	await RegisterAction.fillCode();
	await RegisterAction.fillStudent();
});

When(/^aciona a opção salvar$/, async () => {
	await RegisterAction.saveStudent();
});

Then(/^ele criará o cadastro do aluno com sucesso$/, async () => {
	await RegisterAction.searchStudent();
});









// Given(/^que o usuário esteja logado na aplicação$/, async () => {
// 	await LoginAction.seeLoginPage();
//     await LoginAction.fillLogin();
//     await LoginAction.enterLogin();
// });

// Given(/^ele esteja na Home Page do sistema$/, async () => {
	// await RegisterAction.seeHomeRegister();
// //     console.log('Tô vendo a home')
// });

// When(/^ele preenche o campo de código$/, async () => {
// 	await RegisterAction.fillCode();
// });

// When(/^preenche o campo de aluno$/, async () => {
// 	await RegisterAction.fillStudent();
// });

// When(/^aciona a opção salvar$/, async () => {
// 	await RegisterAction.saveStudent();
// });

// Then(/^ele criará o cadastro do aluno com sucesso$/, async () => {
// 	await RegisterAction.searchStudent();
// });

// // Given(/^que o usuário esteja logado na aplicação$/, async () => {
// // 	await LoginAction.seeLoginPage();
// //     await LoginAction.fillLogin();
// //     await LoginAction.enterLogin();
// // });

// // Given(/^esteja na Home Page do sistema$/, async () => {
// // 	await RegisterAction.seeHomeRegister();
// //     console.log('Tô vendo a home')
// // });

// // When(/^ele preenche o campo de código$/, async () => {
// // 	await RegisterAction.fillCode();
// //     // console.log('Tô preenchendo o código')
// // });

// // When(/^preenche o campo de aluno$/, async () => {
// // 	await RegisterAction.fillStudent();
// // });

// // When(/^aciona a opção salvar$/, async () => {
// // 	await RegisterAction.saveStudent();
// // });

// // Then(/^ele criará o cadastro do aluno com sucesso$/, async () => {
// // 	await RegisterAction.searchStudent();
// // });

// // Given(/^que o usuário esteja logado na aplicação$/, async () => {
// // 	await LoginAction.seeLoginPage();
// //     await LoginAction.fillLogin();
// //     await LoginAction.enterLogin();
// // });

// // Then(/^esteja na Home Page do sistema$/, async () => {
// // 	await LoginAction.seeHome();
// // });

// When(/^ele preenche o campo de código$/, async () => {
// 	return true;
// });

// When(/^não preenche o campo de aluno$/, async () => {
// 	return true;
// });

// When(/^aciona a opção salvar$/, async () => {
// 	return true;
// });

// Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, async () => {
// 	return true;
// });

// // Given(/^que o usuário esteja logado na aplicação$/, async () => {
// // 	await LoginAction.seeLoginPage();
// //     await LoginAction.fillLogin();
// //     await LoginAction.enterLogin();
// // });

// // Then(/^esteja na Home Page do sistema$/, async () => {
// // 	await RegisterAction.seeHome();
// // });

// When(/^ele não preenche o campo de código$/, async () => {
// 	await RegisterAction.fillCode();
// });

// When(/^preenche o campo de aluno$/, async () => {
// 	return true;
// });

// When(/^aciona a opção salvar$/, async () => {
// 	return true;
// });

// Then(/^verá um aviso indicando que os campos devem ser preenchidos$/, async () => {
// 	return true;
// });

// // Given(/^que o usuário esteja logado na aplicação$/, async () => {
// // 	await LoginAction.seeLoginPage();
// //     await LoginAction.fillLogin();
// //     await LoginAction.enterLogin();
// // });

// // Then(/^esteja na Home Page do sistema$/, async () => {
// // 	await LoginAction.seeHome();
// // });

// When(/^ele preenche um dos campos de aluno ou código$/, async () => {
// 	return true;
// });

// When(/^aciona a opção para cancelar o cadastro$/, async () => {
// 	return true;
// });

// Then(/^os campos de código e aluno serão limpos$/, async () => {
// 	return true;
// });
