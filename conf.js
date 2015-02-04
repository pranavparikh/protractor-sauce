// An example configuration file.
exports.config = {

    // This works fine, but looking for way if we can pass sauceUser and sauceKey as part of Selenium address
    // like the way it works for Java - https://docs.saucelabs.com/tutorials/java/#junit
//    sauceUser: process.env.SAUCE_USERNAME,
//    sauceKey: process.env.SAUCE_ACCESS_KEY,

    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['spec.js'],

    // Is this supported ?
    seleniumAddress: "http://sauceUser:sauceKey@ondemand.saucelabs.com:80/wd/hub",

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
