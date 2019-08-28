const jsonReports = process.cwd() + '/reports/json';
const Reporter = require('./support/reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 120000,
  allScriptsTimeout: 6000000,  

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    //'features/*.feature'
	'features/weatherForecast.feature'
  ],

    // multiCapabilities: [{
    //     'browserName': 'firefox'
    // }, {
    //     'browserName': 'chrome'
    // }],
    capabilities: {
        'browserName': 'chrome',
    },
  cucumberOpts: {
    require: ['env.js','features/steps/steps.js'],
      tags: '@weather-08',
    format: 'json:./reports/json/cucumber_report.json',
	dryRun: false,
  },
  onPrepare: function(){
	  browser.manage().timeouts().pageLoadTimeout(40000);
	  browser.manage().timeouts().implicitlyWait(25000);
	  Reporter.createDirectory(jsonReports);
	  
  },
  onComplete: function(){
	  Reporter.createHTMLReport();
  },
  allScriptsTimeout: 1000000
  
}
