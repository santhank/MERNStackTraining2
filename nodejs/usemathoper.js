var abc = require("./mathoper");
var print = require("scanf");
//abc.cake();
//var x=10;
//var y = 20;
console.log("Get the value of X")
x=print("%d");
console.log("Get the value of Y")
y=print("%d");
abc.add(x,y);
abc.mul(x,y);
abc.div(x,y);
abc.sub(x,y);