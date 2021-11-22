var {config} = require('./wdio.conf.ts');

port : 4723;
path : '/wd/hub/';
baseUrl : 'http://127.0.0.1';

config.capabilities = [
    {
        platformName: 'Android',
        platformVersion: '9',
        app: 'D:/mobileApps/sample.apk',
        appWaitActivity: "com.swaglabsmobileapp.MainActivity",
        automationName: 'UiAutomator2',
        deviceName: 'emulator-5554'
    }
];


config.services = [
    [
        'appium',
        {
          args: {
            relaxedSecurity: true
           },
          command: 'appium'
        }
      ]
  ];

exports.config = config;