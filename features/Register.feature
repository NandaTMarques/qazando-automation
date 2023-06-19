# language: pt
@Registration
Funcionalidade: Cadastro de Aluno
    Eu como usuario
    Gostaria de cadastrar novos alunos
    Para ter o controle de todos os alunos existentes

    Contexto:
        Dado que o usuário esteja logado na aplicação
        E ele esteja na Home Page do sistema
    
    @SuccessRegistration @TalkTests
    Cenario: Cadastro com sucesso
        Quando ele preenche o campo de código
        E preenche o campo de aluno
        E aciona a opção salvar
        Então ele criará o cadastro do aluno com sucesso

    @RegistrationError @TalkTests
    Cenario: Cadastro deixando o código do aluno sem preencher
        Quando ele preenche o campo de código
        E não preenche o campo de aluno
        E aciona a opção salvar
        Então verá um aviso indicando que os campos devem ser preenchidos

    @RegistrationError
    Cenario: Cadastro o nome do aluno sem preencher
        Quando ele não preenche o campo de código
        E preenche o campo de aluno
        E aciona a opção salvar
        Então verá um aviso indicando que os campos devem ser preenchidos

    @Cancel
    Cenario: Cancelar o cadastro de um aluno
        Quando ele preenche um dos campos de aluno ou código
        E aciona a opção para cancelar o cadastro
        Então os campos de código e aluno serão limpos