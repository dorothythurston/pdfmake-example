const fs = require("fs");
const PdfPrinter = require("pdfmake/src/printer");
const yargs = require("yargs");
const argv = yargs
  .usage(
    "Generate a pdf file.\n" +
      "Usage: $0 --original <js-filepath> --filename <output-filename>"
  )
  .demand("original")
  .nargs("original", 1)
  .describe("original", "Filepath for JS file")
  .demand("filename")
  .nargs("filename", 1)
  .describe("filename", "Filename for new pdf")
  .epilog(
    "The JS file will be converted to .json in tmp folder first and then to .pdf"
  ).argv;

const fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf"
  }
};
const printer = new PdfPrinter(fonts);
const uniqueTime = new Date().getTime();
const jsonFilename = `./tmp/temp-${uniqueTime}.json`;

const pageMargin = 30;
const pageWidth = 595;

const headerFooterObject = {
  header: function(currentPage, pageCount) {
    if (currentPage !== 1) {
      return [
        {
          columns: [
            { text: "Cool Project", alignment: "left", style: "pageHeader" },
            {
              text: "Awesome Account",
              alignment: "center",
              style: "pageHeader"
            },
            { text: "Great Company", alignment: "right", style: "pageHeader" }
          ]
        }
      ];
    }
  },
  footer: function(currentPage, pageCount) {
    if (currentPage !== 1) {
      return [
        {
          canvas: [
            {
              type: "line",
              x1: pageMargin,
              y1: 0,
              x2: pageWidth - pageMargin,
              y2: 0,
              lineWidth: 0.5,
              lineColor: "#BCC9D1"
            }
          ]
        },
        {
          columns: [
            { text: "Created with", width: "auto", style: "pageFooterLeft" },
            {
              text: "Autodesk® BIM 360™",
              width: "auto",
              style: "BimName",
              link: "http://google.com"
            },
            {
              text: "Page " + currentPage.toString() + " of " + pageCount,
              style: "pageFooterRight",
              width: "*",
              alignment: "right"
            }
          ]
        }
      ];
    }
  }
};

const memoryUsageCheck = () => {
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    );
  }
};

const jsonToPDF = (path, fileName) => {
  fs.readFile(require.resolve(path), (err, data) => {
    if (err) return;

    const pdfPath = `pdfs/${fileName}-${uniqueTime}.pdf`;
    const docDefinition = JSON.parse(data);
    memoryUsageCheck();
    Object.assign(docDefinition, headerFooterObject);
    memoryUsageCheck();
    const now = new Date();
    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(pdfPath));
    pdfDoc.end();
    memoryUsageCheck();
    console.log(
      "JSON to PDF Conversion took ",
      Math.round((new Date() - now) / 1000),
      " seconds"
    );
    console.log(`Saved pdf here: ${pdfPath}`);
  });
};

const convertJSToPDF = () => {
  const json = require(argv.original);
  const translated = JSON.stringify(json);

  fs.writeFile(jsonFilename, translated, err => {
    if (err) return console.log(err);
    console.log(`Successfully Written to temp file ${jsonFilename}.`);
    memoryUsageCheck();

    return jsonToPDF(jsonFilename, argv.filename);
  });
};

convertJSToPDF();
