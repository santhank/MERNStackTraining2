var express = require('express');
var router = express.Router();
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.json({"name":"Sam","age":22,"dep":"Bio"});
});*/

// POST method route
router.post('/', function (req, res) {
//res.json("name":"Sam","age":22,"dep":"Bio"});

//res.json(req.body.name);

// Push: working
var dataarray= new Array();
dataarray.push(req.body.name);
res.send(dataarray);
console.log(dataarray);

router.get('/', function(req, res, next) {
  res.send(dataarray);
});

});
router.put('/', function(req, res, next) {
	var namevar = req.body.name;
  res.send(namevar);
  console.log(namevar);

router.get('/', function(req, res, next) {
  res.send(namevar);
});

});

module.exports = router;
