var fs = require('fs');
fs.readFile('India2011test.csv', function(err, data) {
    if(err) throw err;
    var lines = data.toString().split("\n");
    var array = new Array();