var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var movies = require(".././models/movieschema");
var requestify = require('requestify'); 

//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', function (req, res) {
  
var title = req.body.title;
var year = req.body.year;
var plot = req.body.plot;
var response = req.body.response;
var buildurl1 ="http://www.omdbapi.com/?";
var buildurl2=buildurl1+"t="+title+"&y="+year+"&plot="+plot+"&r="+response

//res.send(buildurl2);
console.log(buildurl2);

	// Create using POST
	requestify.post(buildurl2).then(function(response) { 
		// Get the response body response.getBody(); 
		//res.send(response.getBody());
		//res.send("Post success");
		jsonarray = response.getBody();
		var movie = new movies(jsonarray);

		

		// movie.Title=jsonarray.Title;
		// movie.Year=jsonarray.Year;
		// movie.Rated=jsonarray.Rated;
		// movie.Released=jsonarray.Released;
		// movie.Runtime=jsonarray.Runtime;
		// movie.Genre=jsonarray.Runtime;
		// movie.Director=jsonarray.Runtime;
		// movie.Writer=jsonarray.Writer;
		// movie.Actors=jsonarray.Actors;
		// movie.Plot=jsonarray.Plot;
		// movie.Language=jsonarray.Language;
		// movie.Country=jsonarray.Country;
		// movie.Awards=jsonarray.Awards;
		// movie.Poster=jsonarray.Poster;
		// movie.Metascore=jsonarray.Metascore;
		// movie.imdbRating=jsonarray.imdbRating;
		// movie.imdbVotes=jsonarray.imdbVotes;
		// movie.imdbID=jsonarray.imdbID;
		// movie.Type=jsonarray.Type;
		// movie.Response=jsonarray.Response;
		//res.json(movie);
		   movie.save(function(err){
		      res.send("data inserted");
		      console.log("console: data inserted");
			});


		});

		router.get('/', function(req, res, next) {
		  res.send("data inserted");
		});
	});


	// Update using PUT
	
	router.put('/',function(req, res, next) { 
		var title = req.body.title;
		var year = req.body.year;
	
	
		if (movies.findOne({Title:title}, function (err,data){
	
			movies.update({Title:title},{Country:"AMERICA"},function (err,data){
				if (err) return console.error(err);
				res.send("Post: data modified");
				console.log("console:data modified");
			});
	
		}));

	router.get('/', function(req, res, next) {
 	res.send("Get :data modified");
	});		
	
	});


	// Read using get
	router.get('/',function(req, res, next) { 
	
		if (movies.find(function (err,data){
			res.send(data);
		}));
	});



	// Delete
	router.delete('/',function(req, res, next) { 
		var title = req.body.title;
		var year = req.body.year;
	
		if (movies.find({Title:title},function (err,data){
			movies.remove({Title:title}, function (err,data){
				if (err) return console.error(err);
				res.send("Delete: data Deleted");
				console.log("console:data Deleted");
			});

		}));
	});


module.exports = router;