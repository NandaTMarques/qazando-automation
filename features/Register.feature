#language: pt
@Cadastro
Funcionalidade: Cadastro de Aluno
    Eu como usuario
    Gostaria de cadastrar novos alunos
    Para ter o controle de todos os alunos existentes

    # Contexto:
    #     Dado que o usuário esteja logado na aplicação
    #     E ele esteja na Home Page do sistema
    Cenário: Cadastro com sucesso
        Dado que o usuário esteja logado na aplicação
        E esteja na Home Page do sistema
        Quando ele preenche o campo de código
        E preenche o campo de aluno
        E aciona a opção salvar
        Então ele criará o cadastro do aluno com sucesso

    Cenário: Cadastro sem preencher o código do aluno
        Dado que o usuário esteja logado na aplicação
        E esteja na Home Page do sistema
        Quando ele preenche o campo de código
        E não preenche o campo de aluno
        E aciona a opção salvar
        Então verá um aviso indicando que os campos devem ser preenchidos

    Cenário: Cadastro sem preencher o nome do aluno
        Dado que o usuário esteja logado na aplicação
        E esteja na Home Page do sistema
        Quando ele não preenche o campo de código
        E preenche o campo de aluno
        E aciona a opção salvar
        Então verá um aviso indicando que os campos devem ser preenchidos

    Cenário: Cancelar o cadastro de um aluno
        Dado que o usuário esteja logado na aplicação
        E esteja na Home Page do sistema
        Quando ele preenche um dos campos de aluno ou código
        E aciona a opção para cancelar o cadastro
        Então os campos de código e aluno serão limpos