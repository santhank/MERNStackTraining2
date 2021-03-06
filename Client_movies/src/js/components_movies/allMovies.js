var React= require('react');
var ReactDom = require('react-dom');
var Movie =require('./allMoviesDisplay');

var allMovies = React.createClass({

  getInitialState:function()
	{
		return{AllMovieFrmDb:[]};
	},
  dispmovies:function(){
  //   //var addMovie = this.props.allMovies;
  //   //console.log(e);
    $.ajax({
      url: "http://localhost:8080/getmoviefromdb",
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        console.log("Ajax:GET: Success");
        console.log(data);
        this.setState({AllMovieFrmDb: data});
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
componentWillMount(){
  this.dispmovies();
},
  render: function() {

    var AllMovieFrmDbMap = this.state.AllMovieFrmDb.map(function(moviedb){

  		return(

  			<allMoviesDisplay allMovies={moviedb} key={moviedb.imdbID}></allMoviesDisplay>

  			)
  	})
  	console.log(AllMovieFrmDbMap)

    return (
      <div className = "Movies">
      <div className = "container-fluid">
        <h1> All Movies </h1>
        {AllMovieFrmDbMap}
    </div>
    </div>

    );
  }
});

module.exports = allMovies;
