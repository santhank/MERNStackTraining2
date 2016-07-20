var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
  var obj = {"Title" : "Transformers","Year" : "2007","Rated" : "PG-13","Released" : "03 Jul 2007"};
  res.json(obj);
});

module.exports = router;
