const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const report = require("cucumber-html-report");
const reporter = require("cucumber-html-reporter");
const htmlReports = process.cwd() + "/reports/html";
const targetJson = process.cwd() + "/reports/json/cucumber_report.json";

const cucumberReportOptions = {
	source: targetJson,
	dest: htmlReports,
	name: "cucumber_report.html",
	title: "Cucumber Report"
};
const cucumberReporteroptions = {
	theme: "bootstrap",
	jsonFile: targetJson,
	output: htmlReports + "cucumber_reporter.html",
	reportSuiteAsScenarios: true
};

class Reporter {
	
	static createDirectory(dirName) {
		if(!fs.existsSync(dirName)){
			mkdirp.sync(dirName);
		}
	}
	
	static createHTMLReport(){
		try{
			reporter.generate(cucumberReporteroptions);
			report
				.create(cucumberReportOptions)
				.then(function(){
					console.log("Success");
				})
				.catch(function(err){
					if(err){
						console.log(err);
					}
				});
		} catch(err){
			if(err){
				console.log(err);
			}
		}
	}
	
	static createAllureXML() {
			const allureReporter = require("cucumberjs-allure-reporter");
		const xmlReports = process.cwd() + "/reports/xml";
		Reporter.createDirectory(xmlReports);
		allureReporter.config({
			targetDir: xmlReports
		})
	}
}

module.exports = Reporter;