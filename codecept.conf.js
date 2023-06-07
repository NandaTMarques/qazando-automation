const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  name: 'qazando-automation',
  tests: './step_definitions/*_test.js',
  output: './output', 
  helpers: {
    Appium: {
      app: process.env.APP,
      platform: process.env.PLATFORM,
      desiredCapabilities: {
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,
        appPackage: 
          process.env.PLATFORM == 'Android' ? process.env.PACKAGE : "",
        appActivity: 
          process.env.PLATFORM == 'Android' ? process.env.ACTIVITY : "",

      // app: '/Users/fernandatmarques/qazando-automation/app/app-release.apk',
      // platform: 'Android',
      // desiredCapabilities: {
      //   deviceName: 'Projeto_automation',
      //   platformVersion: '10.0',
      //   appPackage: 'com.qazandoapp',
      //   appActivity: 'MainActivity',

      // app: '/Users/fernandatmarques/qazando-automation/app/qazandoapp.app',
      // platform: 'iOS',
      // desiredCapabilities: {
      //   deviceName: 'iPhone 14 Pro Max',
      //   platformVersion: '16.4',
        },
    },
  },
  include: {
    I: "./steps_file.js",
    login_page: "./pages/login_page.js",
    home_page: "./pages/home_page.js"
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  // hooks: [],
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
  },
}