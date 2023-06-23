const { I } = inject();

module.exports = {

  fields: {
    emailField: '~email', // accessibility
    passwordField: 'Senha', //text
  },
  text: {
    email: 'teste@teste.com',
    password: '123456',
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
