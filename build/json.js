var fs = require('fs');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.on("end_parsed", function (jsonArray) {
    fs.writeFile('src/data/sample.json', JSON.stringify(jsonArray, null, '    '));
    console.log("Output in JSON format");
});

require("fs").createReadStream("lib/csv/data.csv").pipe(converter);
