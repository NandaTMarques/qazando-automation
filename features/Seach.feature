# language: pt
@SearchStudent
Funcionalidade: Buscar Aluno
    Eu como usuario
    Gostaria de fazer busca de aluno
    Para poder ver cada aluno individualmente

    Contexto:
        Dado que o usuário esteja logado na aplicação
        E ele esteja na Home Page do sistema
    
    @SuccessSearch
    Cenario: Busca de aluno com sucesso
        Quando ele preenche o campo de busca
        Então ele verá o cadastro do aluno com sucesso

    @swipe
    Cenario: Busca de aluno deslizando a tela
        Quando ele desliza a tela para cima
        Então ele verá o cadastro do aluno com sucesso