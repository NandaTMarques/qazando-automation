const { I } = inject();

module.exports = {

    fields: {
        codeField: '~codigo',
        code: '06117',
        studentField: '~aluno',
        student: 'Fernanda Teixeira',
        searchStudent: '~search',
        studentFound: '//android.view.ViewGroup[@content-desc="06117"]'// xpath
    },

    buttons: {
        saveStudent: '~salvar',
        cancelButton: '~cancelar'
    },

    messages: {
        msgRegisterFail: 'Os campos devem ser preenchidos!',
    },

}
