#language: pt

Funcionalidade: Login
  Eu como usuario
  Gostaria de fazer o Login na aplicação
  Para acessar o sistema

  @Login @TalkTests
  Cenario: Login com sucesso
    Dado que o usuário esteja na tela de login
    Quando ele preenche os campos de e-mail e senha com credenciais validas
    E aciona a opção para logar
    Então ele acessará a home do sistema

  @ErroNoLogin
  Cenario: Tentar fazer o login com email errado
    Dado que o usuário esteja na tela de login
    Quando ele preenche os campos de e-mail inválido e senha valida
    E aciona a opção para logar
    Então ele verá uma mensagem de erro no login
  
  @ErroNoLogin @TalkTests
  Cenario: Tentar fazer Login com com senha errada
    Dado que o usuário esteja na tela de login
    Quando ele preenche os campos de e-mail válido e senha inválida
    E aciona a opção para logar
    Então ele verá uma mensagem de erro no login
