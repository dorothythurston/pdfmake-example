const IssueDetailsCompactPDFMakeTemplate = require('./reportTemplates/issue-details-compact');
const reportContent = require('./reportTemplates/data/bulk-returned-issues');
const fs = require('fs');

const pageSize = 'A4';
const projectName = 'Cool Project';
const reportTitle = 'Field Report';

const reportData = {
	reportCreationInformation: {
		reportcreatoremail: 'dorothy.thurston@autodesk.com',
		reportcreatorname: 'Dorothy Thurston',
		reportcreatorcompanyname: 'BIM360 Reporting Team Test Projects',
		projectname: projectName,
		timezone: 'Australia/Sydney',
		reportTitle,
		reportDescription: 'Example Report'
	},
	reportContent,
	reportAttributes: {
		pageSize,
		itemLinkRoot: 'https://field.b360-qa.autodesk.com'
	}
};

var writeToJSON = () => {
	var json = IssueDetailsCompactPDFMakeTemplate.generateDefinition(reportData);
	var translated = JSON.stringify(json);
	fs.writeFile("./issueDetailsCompact.json", translated, (err) => {
		if (err) console.log(err);
		console.log("Successfully Written to File.");
		pdfToJson('./issueDetailsCompact.json', 'issueDetailsCompact');
	});
};

var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf'
	},
	Noto: {
    normal: 'fonts/NotoSans-Regular.ttf',
    bold: 'fonts/NotoSans-Bold.ttf',
    italics: 'fonts/NotoSans-Italic.ttf',
    bolditalics: 'fonts/NotoSans-BoldItalic.ttf'
  }
};

var PdfPrinter = require('pdfmake/src/printer');
var printer = new PdfPrinter(fonts);

var pdfToJson = (path, fileName) => {
  fs.readFile(require.resolve(path), (err, data) => {
		if (err) return;

		var docDefinition = JSON.parse(data);
		var now = new Date();
		var pdfDoc = printer.createPdfKitDocument(docDefinition);
		pdfDoc.pipe(fs.createWriteStream(`pdfs/${fileName}.pdf`));
		pdfDoc.end();
		console.log(new Date() - now);
  })
}


writeToJSON();