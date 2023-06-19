const { I } = inject();
// const LoginPage = require('../page_objects/login_page.js');
// const HomePage = require('../page_objects/home_page.js');
// const RegisterStudent = require('../page_objects/register_page.js');

module.exports = {

    async searchStudent () {
        await I.wait(2);
        await I.fillField('~search', 'Clarise');
        // await I.fillField('~search', 'Lucas');
        await I.wait(2);
    },

    async seeStudent () {
        await I.wait(2);
        await I.seeElement('~66525');
        // await I.seeElement('~55522');
        await I.wait(2);
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
        await I.waitForVisible('~5952', 2);
        await I.wait(3);
    }

}
