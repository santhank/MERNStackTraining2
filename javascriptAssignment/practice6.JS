//flatten object
var obj = [5, [22], [[14]], [[4]],[5,6]];
var arr=[];function fetchObj(obj,arr){
for (var i=0;i<obj.length;i++){
  if(typeof obj[i]=='number'){
      arr.push(obj[i]);
  }else{
      fetchObj(obj[i],arr);
  }
}}
fetchObj(obj,arr);
console.log(arr); 