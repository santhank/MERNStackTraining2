var fs = require('fs');
var readline = require('readline');

var filename = process.argv[2];
readline.createInterface({
    input: fs.createReadStream('indicatorstest.csv'),
    terminal: false
}).on('line', function(line) {
   console.log('Line: ' + line);
});