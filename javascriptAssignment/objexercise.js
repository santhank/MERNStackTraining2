var myObj =[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
for (i=0;i<myObj.length;i++){
	a=myObj[i].occupation;
	//console.log(a);
	if (a=="Programmer"){
	console.log(myObj[i]);
	}
}
