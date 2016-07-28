var React = require('react');
var ReactDOM = require('react-dom');


var Movie = React.createClass({
// getInitialState: function() {
//     return {data: []};
//   },

  onClick:function(){
  	//var addMovie = this.props.allMovies;
  	//console.log(e);
  	$.ajax({
      url: "http://localhost:8080/addmovietodb",
      dataType: 'json',
      type: 'POST',
      data: this.props.allMovies,
      success: function(data) {
        console.log("data instered in db");
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  onDelete:function(){
  	//var addMovie = this.props.allMovies;
  	//console.log(e);
  	$.ajax({
      url: "http://localhost:8080/delmoviefromdb",
      dataType: 'json',
      type: 'DELETE',
      data: this.props.allMovies,
      success: function(data) {
        console.log("Movie deleted from db");
        //this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="movie">
      <h4 className="movieName">
      <div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<img alt="Bootstrap Image Preview" src={this.props.allMovies.Poster}/>
				</div>
				<div className="col-md-6" >
				{this.props.allMovies.Title}
				<input type="submit"  value="add"  onClick={this.onClick}/>
				<input type="submit"  value="del"  onClick={this.onDelete}/>
				</div>
			</div>
		</div>

       </h4>
      </div>
    );
  }
});

module.exports = Movie;
