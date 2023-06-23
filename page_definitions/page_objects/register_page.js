const { I } = inject();

module.exports = {

    fields: {
        codeField: '~codigo',
        studentField: '~aluno',
        searchStudent: '~search',
        studentFound: '//android.view.ViewGroup[@content-desc="06117"]'// xpath
    },
    text: {
        code: '06117',
        student: 'Fernanda Teixeira'
    },

    buttons: {
        saveStudent: '~salvar',
        cancelButton: '~cancelar'
    },

    messages: {
        msgRegisterFail: 'Os campos devem ser preenchidos!',
    },

}
