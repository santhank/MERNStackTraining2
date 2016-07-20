var fs = require('fs');
fs.readFile('India2011.csv', function(err, data) {
    if(err) throw err;
    var lines = data.toString().split("\n");
    var keyarray = new Array();
    var keyelement = new Array;
    var linearray = new Array();
    var elementarray =new Array();
    var jasonrec = new Array();
    var objrec=[];
    var datasetarray=[];


        //console.log(array[i]);
        //console.log(i);
       //header 
        	keyarray = lines[0];
        	keyelement = keyarray.split(",")
        	//console.log(keyelement);
        	//console.log(keyarray);
        	
    		for (var j=1;j<lines.length-1;j++){
            //console.log(j);
    		linearray = lines[j];
            var elementarray=new Array();
    		elementarray = linearray.split(",");
    		datasetarray.push(elementarray);
    		//console.log(elementarray);
    		//console.log(linearray)
    	   }
    //console.log("-------------------------------");
    //console.log(datasetarray[0][3]);
    //console.log(datasetarray[0][5]);
    //console.log(datasetarray[0][9]);
    //console.log("-------------------------------");
    //console.log(datasetarray.length);
    //console.log(datasetarray);


        // Constructor Function
        var stastsDataObj=function(age,population){
            //this.State=state;
            this.Age=age;
            this.Population=population;
          } 

           
           var arrObj=[];
           var refarray=new Array();
       for(var x=0;x<datasetarray.length;x++){
        //console.log(datasetarray.length);
         //arrObj.push(new stastsDataObj("0-8","123456"));
         //arrObj.push(new stastsDataObj("0-9","90909"));
         //arrObj.push(new stastsDataObj("0-10","678"));
         //console.log(datasetarray.row[3])
         if (datasetarray[x][4]=="Total" && datasetarray[x][5]!="All ages"){
            arrObj.push(new stastsDataObj(datasetarray[x][5],datasetarray[x][12]));
         }
        if (datasetarray[x][4]=="Total" && datasetarray[x][5]!="All ages" && datasetarray[x][3]=="State - JAMMU & KASHMIR" ){
            refarray.push(new stastsDataObj(datasetarray[x][5],datasetarray[x][12]));
         }
       }
       //console.log(arrObj);
        
        //console.log(refarray);

       var jasonarray=[];
      
       
    for (var a=0;a<refarray.length;a++){
        //console.log("inside first for",refarray[a].Age);
        var population=0;
        for (var y=0;y<arrObj.length;y++){
            if (arrObj[y].Age==refarray[a].Age){
                population=population+parseInt(arrObj[y].Population);
                //console.log(arrObj[y].Population);
            }
        } 
        //console.log("population:",population) ;
        jasonarray.push(new stastsDataObj(refarray[a].Age,population)); 
        //console.log(jasonarray);          
    }
    /*console.log(population0to6);
    console.log(population7);
    console.log(population8);
    console.log(population9);
    console.log(population10);
    console.log(population11);*/
    //jasonarray.push(new stastsDataObj("0-6",population));
    

   //console.log(jasonarray);

    //console.log(arrObj[0].Age);
    //console.log("-------------------------------");
    //console.log(arrObj.length);

    var jsonObj={};
    //jsonObj.name=arrObj;
    //console.log("json obje====>",JSON.stringify(jsonObj));
    console.log(JSON.stringify(jasonarray));

});