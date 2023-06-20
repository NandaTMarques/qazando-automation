const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    password: '~senha',
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
