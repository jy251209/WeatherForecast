let moment = require("moment-business-days");
var pdfjsLib = require("pdfjs-dist/es5/build/pdf.js");


// ============
const clickElementUsingDOMmethod = (element) => {
    let selector = typeof element === 'string' ? element : element.selector;
    if (selector.includes('/')||selector.includes('//')) {
        browser.execute((elem) => {
            document.evaluate(elem, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
        }, selector);
    } else {
        browser.execute((elem) => {
            document.querySelector(elem).click();
        }, selector);
    }
}

// =========

const getPdfVesrion = (doc)=>{
    const loadingTask = pdfjsLib.getDocument(doc);
    let lastPromise;
    loadingTask.promise.then(function (doc) {
        const numPages = doc.numPages;
        lastPromise = doc.getMetadata().then(function (data) {});
        const loadPage = async function (pageNum) {
            return doc.getPage(pageNum).then(function (page) {
                const viewport = page.getViewport({ scale: 1.0 });
                return page.getTextContent().then(function (content) {
                    const strings = content.items.map(function (item) {
                        return item.str;
                    });
                    let pdfVersion = strings[strings.length-1].split(" ")[0];
                    console.log("Document version ========",pdfVersion)
                    return pdfVersion;
                })
            });
        };
        lastPromise = lastPromise.then(loadPage.bind(null, numPages));
        return lastPromise;
    }).then(function (err) {
        // console.error("Error: " + err);
    });
}

// =============
const randomiseString = (numberOfCharacters, type) => {
    let text = '';
    const possible = type === 'email' ? 'abcdefghijklmnopqrstuvwxyz0123456789' : '0123456789';

    for (let i = 0; i < numberOfCharacters; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

// ==============

const randomiseEmail = () => `${randomiseString(5, 'email')}@${randomiseString(10, 'email')}.com`;

const randomiseMobile = () => `07${randomiseString(9, 'phone')}`;
// =======
const focusElementUsingDOMmethod = (element) => {
    let selector = typeof element === 'string' ? element : element.selector;
    if (selector.includes('/')||selector.includes('//')) {
        browser.execute((elem) => {
            document.evaluate(elem, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.focus();
        }, selector);
    } else {
        browser.execute((elem) => {
            document.querySelector(elem).focus();
        }, selector);
    }
}

// =======

const scrollWaitAndClickElement = (element, _block = 'start', _inline = 'nearest') => {
    let selector = typeof element === 'string' ? element : element.selector;
    $(selector).scrollIntoView({block:_block, inline:_inline});
    $(selector).waitForClickable();
    $(selector).click();
}
// =====
// import environment from './environment';

const seleniumGridConfig = {
    protocol: environment.seleniumGrid.protocol,
    hostname: environment.seleniumGrid.host,
    port: environment.seleniumGrid.port,
    maxInstances: environment.seleniumGrid.instances,
    path:'/wd/hub',
    capabilities: [{
        'zal:build': environment.build,
        browserName: 'chrome',
        'goog:chromeOptions': {
            prefs: {
                // eslint-disable-next-line id-match
                credentials_enable_service: false,
                profile: {
                    // eslint-disable-next-line id-match
                    password_manager_enabled: false,
                },
            },
            args: [
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0',
                '--v8-cache-options=off',
                '--enable-natural-scroll-default',
                '--disable-infobars',
            ],
        },
    }],
};

export default seleniumGridConfig;

// ===========

const baseConfig = {
    environment,
    baseUrl: appUrls.wfeCustomerURL,
    logLevel: environment.logLevel,
    sync: true,
    coloredLogs: true,
    specs: [`./${environment.features}`],
    exclude: [
        `./${environment.excludeFeatures}`,
        `./${environment.wipFeatures}`
    ],
    waitforTimeout: 40000,
    waitforInterval: 200,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: [
        'spec',
        ['allure',  {
            outputDir: './reports/allure-result',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
            useCucumberStepReporter: false
        }],
        ['junit', {
            outputDir: './reports/junit',
            outputFileFormat: function(options) { // optional
                return `results-${options.cid}.${options.capabilities}.xml`
            }
        }],
    ],
    plugins: {
        'wdio-screenshot': {},
    },
    framework: 'cucumber',
    specFileRetries: 1,
    cucumberOpts: {
        compiler: ['js:@babel/register'],
        require: [
            //path.resolve(__dirname, '../support/globals.js'),
            path.resolve(__dirname, '../step_definitions/**/*.js'),
        ],
        backtrace: true,
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression,
        timeout: 600000,
        ignoreUndefinedDefinitions: false
    },
    ...hooks
};
// ===========

// waitForThwart(){
//     browser.switchToParentFrame()
//     browser.waitUntil(() => $('.document-statetracker').getAttribute('data-state-busy-status') === 'none',{timeout:120000})
//     browser.switchToFrame(this.iframe);
// }