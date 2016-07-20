var express = require('express');
var router = express.Router();

//var mongoose = require("mongoose");
var fdata = {};
var bodyParser = require("body-parser");
var User = require(".././models/mongoschema");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));



router.get('/', function (req, res) {
  
    User.find({age:"24"}, function(err, data){
      fdata = data;
      res.send(fdata);

  	});
});



module.exports = router;
