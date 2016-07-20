var len=10;
//var fabarray = new Array;
var a=0;
var b=1;
var c;
var i =0;
//console.log(0);
//console.log(1);
for (i=0;i<len;i++) {
	//console.log(i);
	//fabarray.push[i]= a ;
	c=a+b;
	a=b;
	b=c;
	//console.log(c);
	for (j=0;j<c;j++){
		console.log("*");
	}
	console.log("\n")
}