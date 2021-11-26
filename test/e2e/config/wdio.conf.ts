const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');
export const config: WebdriverIO.Config = {
    
  specs: [
    './test/specs/features/*.feature'
    ],
    exclude: [
        
    ],
    
    maxInstances: 10,
    
    capabilities: [{
      // These capabilities are being set in the config files dedicated for the given platform, e.g. android.conf.ts and sauce.conf.ts
    }],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 30000,
    connectionRetryTimeout: 320000,
    connectionRetryCount: 3,
 
    user: 'sso-optum-hyusein.hyuseinov',
    key: '8c08d53c-97b0-4dc2-8edf-cc2d46c1784c',
    region: 'us', // or 'eu' or 'apac'
    services: [
        // These services are being set in the config files dedicated for the given platform, e.g. android.conf.ts and sauce.conf.ts
      ],
   reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
   framework: 'cucumber',
   //framework: 'mocha',
   cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        profile: [],
        require: [
            './test/stepDefinitions/*.steps.ts'
        ],
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 100000,
        retry: 3
    },
    logLevels: {
        webdriver: 'debug',
        '@wdio/appium-service': 'debug'
    },
   /*  reporters: [
        [ 'cucumberjs-json', {
                jsonFolder: '.tmp/json/',
                language: 'en',
            },
        ],
    ], */

   /*  mochaOpts: {
        ui: 'bdd',
        timeout: 1200000
    }, */
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
     onPrepare: function (config, capabilities) {
     //   removeSync('.tmp/');
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
     onComplete: function(exitCode, config, capabilities, results) {
     /*    generate({
            // Required
            // This part needs to be the same path where you store the JSON files
            // default = '.tmp/json/'
            jsonDir: '.tmp/json/',
            reportPath: '.tmp/report/',
            // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
          }); */
    },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    //onReload: function(oldSessionId, newSessionId) {
    //}
   /*  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }, */
}


