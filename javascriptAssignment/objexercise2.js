var myObj =[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

//Exercise 2: Sort the object basis the age key in the descending order
var sortarr=[];
var a=0;
for (i=a;i<myObj.length;i++){
	if (myObj[a].age < myObj[i].age){
		sortarr.push(myObj[a]);
		console.log(a);
		a++;
		console.log(a);
		}
	
	console.log(sortarr);
}
