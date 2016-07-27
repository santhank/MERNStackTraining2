var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var mailsch = require(".././models/mailboxschema");

//var requestify = require('requestify');

//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', function (req, res) {
console.log(req.body);
		var inbox = new mailsch(req.body);

		   inbox.save(function(err){
		      res.send("Data inserted in MongoDB");
		      console.log("Consolelog=Data inserted in MongoDB");
			});
    //
		// router.get('/', function(req, res, next) {
		//   res.send("data inserted");
		// });
	});


module.exports = router;
