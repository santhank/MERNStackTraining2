var myObj =[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

//Exercise 2: Sort the object basis the age key in the descending order
var sortarr=[];
sortarr=myObj.slice(0);
//console.log(myObj.slice(0));
sortarr.sort(function(a,b){
return b.age - a.age;
});
//console.log("\n")
//console.log(myObj);
//console.log("\n")
console.log(sortarr);
//console.log(myObj);