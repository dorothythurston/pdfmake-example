const fs = require('fs');
const PdfPrinter = require('pdfmake/src/printer');
const yargs = require('yargs');
const argv = yargs
  .usage('Generate a pdf file.\n'
      + 'Usage: $0 --original <js-filepath> --filename <output-filename>')
  .demand('original')
  .nargs('original', 1)
  .describe('original', 'Filepath for JS file')
  .demand('filename')
  .nargs('filename', 1)
  .describe('filename', 'Filename for new pdf')
  .epilog("The JS file will be converted to .json in tmp folder first and then to .pdf")
  .argv;

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf'
  }
};
const printer = new PdfPrinter(fonts);

const jsonFilename = `./tmp/temp-${new Date().getTime()}.json`;

const memoryUsageCheck = () => {
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
}

const jsonToPDF = (path, fileName) => {
  fs.readFile(require.resolve(path), (err, data) => {
		if (err) return;

		var docDefinition = JSON.parse(data);
		var now = new Date();
		var pdfDoc = printer.createPdfKitDocument(docDefinition);
		pdfDoc.pipe(fs.createWriteStream(`pdfs/${fileName}.pdf`));
    pdfDoc.end();
    memoryUsageCheck();
		console.log("JSON to PDF Conversion took ", Math.round((new Date() - now)/1000), " seconds");
  })
};

const convertJSToPDF = () => {
	var json = require(argv.original)
  var translated = JSON.stringify(json);

	fs.writeFile(jsonFilename, translated, (err) => {
		if (err) return console.log(err);
    console.log(`Successfully Written to temp file ${jsonFilename}.`);
    memoryUsageCheck();

    return jsonToPDF(jsonFilename, argv.filename);
	});
};

convertJSToPDF();