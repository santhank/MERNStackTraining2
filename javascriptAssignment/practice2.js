var fs = require('fs');
var array = fs.readFileSync('indicatorstest.csv').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}