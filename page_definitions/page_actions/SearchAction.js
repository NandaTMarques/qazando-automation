const { I } = inject();
const RegisterStudent = require('../page_objects/register_page.js');
const SearchStudent = require('../page_objects/search_page.js');

module.exports = {

    async searchStudent () {
        const searchField = RegisterStudent.fields.searchStudent;
        const wantedStudent = SearchStudent.text.wantedStudent;
        await I.wait(2);
        await I.fillField(searchField, wantedStudent);
        await I.wait(2);
    },

    async seeStudent () {
        const wantedStudentCode = SearchStudent.fields.wantedStudentCode;
        await I.wait(2);
        await I.seeElement(wantedStudentCode);
        await I.wait(3);// não é necessário, só coloquei para podermos ver o final do teste com calma
    }, 

    async slideScreen () {
        I.touchPerform([
            {
                action: 'longPress',
                options: { x: 500, y: 2173 }
            },
            {
                action: 'moveTo',
                options: { x: 500, y: 938 }
            },
            { action: 'release' }
        ]);
    },

    async searchStudentAfterScroll () {
        const student = SearchStudent.fields.student;
        await I.waitForVisible(student, 2);
        await I.wait(3); // não é necessário, só coloquei para podermos ver o final do teste com calma
    }
}
