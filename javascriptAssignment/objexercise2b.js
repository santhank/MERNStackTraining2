var myObj =[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

//Exercise 2: Sort the object basis the age key in the descending order
var sortarr=[];
var a=1;
for (i=0;i<myObj.length;i++){
	a=i+a;
	console.log(myObj[i].age);
	console.log(myObj[a].age);
	//sortarr.sort(myObj[i].age - myObj[a].age);
	console.log(sortarr);
}
