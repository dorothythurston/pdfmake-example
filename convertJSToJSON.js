var fs = require('fs');

var writeToJSON = () => {
	var json = require('./largePDFTemplate.js')
	var translated = JSON.stringify(json);
	fs.writeFile("./largePDFTemplate.json", translated, (err) => {
		if (err) console.log(err);
		console.log("Successfully Written to File.");
	});
};

writeToJSON();