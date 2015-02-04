// Test example

var webdriver = require('./node_modules/protractor/node_modules/selenium-webdriver');

var seleniumAddress = "http://sauceUser:sauceKey@ondemand.saucelabs.com:80/wd/hub";

var driver = new webdriver.Builder().
    usingServer(seleniumAddress).
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'webdriver - Google Search';
    });
}, 1000);

driver.quit();