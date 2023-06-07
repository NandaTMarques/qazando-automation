const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    password: '~senha'
  },

  buttons: {
    enter: '~entrar'
  },

  messages: {
    loginFail: '~lognFail',
  },

  doLogin(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.tap(this.buttons.enter);
  },

  checkLoginFail() {
    // I.wait(3);
    I.waitForElement(this.messages.loginFail, 5);
    I.seeElement(this.messages.loginFail);
  }

}
