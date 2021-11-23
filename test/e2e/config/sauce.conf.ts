var {config} = require('./wdio.conf.ts');
const buildName = `POC Mobile Tests: ${new Date().getTime()}`;

config.capabilities = [
    {
        deviceName: 'Samsung Galaxy S20',
        platformName: 'Android',
        platformVersion: '10',
        appWaitActivity: "com.swaglabsmobileapp.MainActivity",
        app: 'storage:filename=sample.apk'
    }
];


config.services = [
    ['sauce', {
        sauceConnect: true,
       // tunnelIdentifier: '22a8c50ea3444ed6b00885695ab679b5',
        'sauce:options': {
            build: buildName
        }
    }]
  ];

exports.config = config;