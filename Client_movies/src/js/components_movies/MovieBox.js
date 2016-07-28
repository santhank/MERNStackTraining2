var React = require('react');
var ReactDOM = require('react-dom');
var MovieList =require('./MovieList');
var MovieForm=require('./MovieForm');

var MovieBox = React.createClass({
	getInitialState:function()
	{
		return{AllData:[]};
	},
	
	submitTitleData:function(movie){
		console.log(movie.Title);
		$.ajax({
			url:"http://www.omdbapi.com/?s=" + movie.Title,
			type:"GET",
			dataType:"JSON",
			success:function(data){
				console.log(data);
				//props.data.map()
				this.setState({AllData: data.Search});
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		})
	},


  render: function () {
    return (
      <div className="MovieBox">
      
        <h1>Movie Box unplugged</h1>

			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
					<MovieForm handlesubmitTitle={this.submitTitleData} />
        				<MovieList allMovieData={this.state.AllData}/>	
					</div>
				</div>
			</div>
      </div>
    );
  }
});

module.exports = MovieBox;