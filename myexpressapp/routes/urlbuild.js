var express = require('express');
var router = express.Router();
var requestify = require('requestify'); 

var jsonarray=[];


// POST method route
router.post('/', function (req, res) {

var title = req.body.title;
var year = req.body.year;
var plot = req.body.plot;
var response = req.body.response;
var buildurl1 ="http://www.omdbapi.com/?";
var buildurl2=buildurl1+"t="+title+"&y="+year+"&plot="+plot+"&r="+response

//res.send(buildurl2);
console.log(buildurl2);


requestify.post(buildurl2).then(function(response) { 
// Get the response body response.getBody(); 
//res.send(response.getBody());
res.send("Post success");
jsonarray = response.getBody();
});

router.get('/', function(req, res, next) {
  res.send(jsonarray);
});


});



module.exports = router;
