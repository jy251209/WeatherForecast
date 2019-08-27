// 'use strict';
// var webdriver = require('selenium-webdriver');
// var driver = new webdriver.Builder()
//   .withCapabilities(webdriver.Capabilities.chrome())
//   .build();
//
//
// module.exports = function () {
//
//   this.Given(/^I launch the application/, function () {
//     driver.get('http://localhost:3000')
//   })
//
//   this.Given(/^I enter the (.*) and click on submit$/, function (city) {
//     // driver.findElement(By.xpath("//input[@id='city']")).clear();
//     driver.findElement(webdriver.By.id('city')).clear();
//     driver.findElement(webdriver.By.id('city')).sendKeys(city)
//     driver.findElement(webdriver.By.id('city')).sendKeys(webdriver.Key.ENTER)
//   })
//   this.Given(/^I should get the five day whether forecast$/, function () {
//
//     driver.findElement(webdriver.By.xpath("//span[@class='name']"))
//
//     // .getText().then(function (text) {
//     //   console.log('------', text);
//     // })
//     // console.log('count', count)
//
//     // driver.findElement(webdriver.By.xpath("//span[@class='name']")).getText().then(function (text) {
//     //   console.log(text);
//     // })
//
//   })
//   this.Given(/^I select a (.*) and I will get hourly forecast$/, function (day) {
//     driver.findElement(webdriver.By.xpath("//span[text()='+day+']"))
//   })
//   this.Given(/^I hide the hourly forecast of the selected day$/, function (header) {
//     browser.get('http://localhost:3000')
//   })
//   this.Given(/^I should be able to summarize the forecast data retrieved$/, function (header) {
//     browser.get('http://localhost:3000')
//   })
//
//
// };
//
