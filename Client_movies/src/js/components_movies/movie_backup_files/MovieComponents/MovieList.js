var React = require('react');
var ReactDOM = require('react-dom');
var Movie =require('./Movie');

var MovieList = React.createClass({
  render: function () {

  	var allMovieDataMap = this.props.allMovieData.map(function(movie){

  		return(

  			<Movie allMovies={movie} key={movie.imdbID}></Movie>

  			)
  	})
  	console.log(allMovieDataMap)

    return (
      <div className="movieList">
      <h2> Movie List </h2>
      	{allMovieDataMap}
      </div>
    );
  }

});

module.exports = MovieList;