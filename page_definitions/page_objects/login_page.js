const { I } = inject();

module.exports = {

  fields: {
    email: '~email', // accessibility
    password: 'Senha', //text
    emailLogin: 'teste@teste.com',
    passwordLogin: '123456',
    wrongEmail: 'teste@teste.com.br',
    wrongPassword: '123457'
  },

  buttons: {
    enter: '~entrar'
  },

  messages: {
    loginFail: '~lognFail',
  },

}
