var myObj = [5, [22], [[14]], [[4]],[5,6]];
var test ="";
test = ""+myObj;
//console.log(typeof(test));
//console.log(test);
var flatarray = [];
var line = test.replace("[","");
//console.log(line);
var flatarray =[];
flatarray=line.split(",");
//console.log(flatarray);
var a;
var b = [];
for (i in flatarray){
	a=parseInt(flatarray[i]);
	b.push(a);
}
console.log(b);
