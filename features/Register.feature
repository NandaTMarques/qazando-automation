# language: pt

Funcionalidade: Cadastro de Aluno
    Eu como usuario
    Gostaria de cadastrar novos alunos
    Para ter o controle de todos os alunos existentes

    @Cadastro1
    Cenario: Cadastro com sucesso
        Dado que o usuário esteja na Home Page do sistema
        Quando ele preenche os campos de código e aluno
        E aciona a opção salvar
        Então ele criará o cadastro do aluno com sucesso
