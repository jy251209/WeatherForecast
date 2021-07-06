let moment = require("moment-business-days");
var pdfjsLib = require("pdfjs-dist/es5/build/pdf.js");




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