
var dumb = function (){
var i =0;
while (i < 1000){
	//console.log(i);
	i++;
}
}
setImmediate(dumb);
console.log("finished");