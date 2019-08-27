var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var sel = require('selenium-webdriver')

var WeatherFunctions = function () {

  var step_page = require(process.cwd()+'/features/pages/Weather_Forecast.js')
  // var step_page = require("/Users/jyothishputhanpurachiraa/Documents/WebEx/protractor-cucumber-example-master/features/pages/Weather_Forecast.js")
  var stepPage = new step_page();

  this.Given('Application is open', function (callback) {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000').then(function () {
      callback();
    });
  });

  this.Given(/^I enter the (.*) and click on submit$/, function (city) {
    browser.findElement(by.xpath("//input[@id='city']")).clear();
    browser.findElement(by.xpath("//input[@id='city']")).sendKeys(city);
    browser.findElement(by.xpath("//input[@id='city']")).sendKeys(protractor.Key.ENTER);
  })

  this.Given(/^I should get the five day whether forecast$/, function () {
    stepPage.weatherforecast();
  })
  this.Given(/^I select a (.*) and I will get hourly forecast$/, function (day) {
    console.log('day is',day)
    browser.findElement(by.xpath('//span[text()=\''+day+'\']')).click();
    browser.sleep(2000)
    stepPage.hourlyforecast(day)
    stepPage.MinMaxtemp(day)
    stepPage.aggrgtRainfall(day)
    stepPage.dominantCondition(day)
    stepPage.WindSpeed(day)
//     browser.pause()
  })

  this.Given(/^I hide the hourly forecast of the selected (.*)$/, function (day) {

    browser.findElement(by.xpath('//span[text()=\''+day+'\']/../../../div[2]')).isDisplayed().then(function (bool) {
      console.log('bool',bool)
      if(bool){
        console.log('enter')
        browser.findElement(by.xpath('//span[text()=\''+day+'\']')).click();
        browser.sleep(2000)
        browser.findElement(by.xpath('//span[text()=\''+day+'\']/../../../div[2]')).isDisplayed().then(function (boolean) {
          expect(boolean).to.equal(false)
        })
      }else {browser.findElement(by.xpath('//span[text()=\''+day+'\']/../../../div[2]')).isDisplayed().then(function (boolean) {
        expect(boolean).to.equal(false)
      })}
    })
  })
  this.Given(/^I enter an invalid city name-(.*) and click on submit$/, function (city) {
    browser.findElement(by.xpath("//input[@id='city']")).clear();
    browser.findElement(by.xpath("//input[@id='city']")).sendKeys(city);
    browser.findElement(by.xpath("//input[@id='city']")).sendKeys(protractor.Key.ENTER);
  })
  this.Given(/^I should get the message (.*)$/, function (err) {
      expect(element(by.xpath('//div[text()=\''+err+'\']')).isPresent()).to.become(true);
      browser.findElement(by.xpath('//div[text()=\''+err+'\']')).getText().then(function (errText) {
      expect(err).to.equal(errText)
    })
  })
  this.Given(/^I submit without entering any input$/, function () {
    browser.$('#city').clear().then(function () {
      browser.sleep(2000);
      //browser.$('#city').submit();
      browser.sleep(2000);
      browser.findElement(by.xpath("//input[@id='city']")).sendKeys(protractor.Key.ENTER);
      browser.sleep(2000);
    })
  })
};

module.exports = WeatherFunctions;