var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf'
	}
};

var PdfPrinter = require('pdfmake/src/printer');
var printer = new PdfPrinter(fonts);
var fs = require('fs');


var writeToJSON = () => {
	var json = require('./largePDFTemplate.js')
	var translated = JSON.stringify(json);
	fs.writeFile("./largePDFTemplate.json", translated, (err) => {
		if (err) console.log(err);
		console.log("Successfully Written to File.");
	});
};

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

//writeToJSON();
pdfToJson('./largePDFTemplate.json', 'largeJson');

