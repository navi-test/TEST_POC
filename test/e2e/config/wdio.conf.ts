const { removeSync } = require('fs-extra');
const allure = require('allure-commandline');
exports.config = {
    
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
   reporters: ['spec',['allure', {
       outputDir: 'allure-results',
       disableWebdriverStepsReporting: true,
       disableWebdriverScreenshotsReporting: false,
       useCucumberStepReporter: true
    }]],
   framework: 'cucumber',

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
    //
    // =====
    // Hooks
    // =====
   
     onPrepare: function (config, capabilities) {
    // removeSync('allure-results/');
    // removeSync('allure-report/');
    },
    
    afterStep: async function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
        
        if(passed == false){
            const reporter = require('@wdio/allure-reporter');
            reporter.default.addAttachment('Screenshot', Buffer.from(await browser.takeScreenshot(), 'base64'), 'image/png');
        }
    }

    
}


