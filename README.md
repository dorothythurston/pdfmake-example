#PDFMAKE example conversion

Quick toy app to show conversion...

To convert a JS file to PDF use the command line args:
```
  node convertJSToPDF.js --original './largePDFTemplate' --filename 'output'
```
This will create a tmp json file in the tmp/ folder and a output-<unique-timestamp>.pdf file in the pdfs folder