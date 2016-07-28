var React= require('react');
var ReactDom = require('react-dom');

var allMoviesDisplay = React.createClass({
  // onDelete:function(){
  // 	//var addMovie = this.props.allMovies;
  // 	//console.log(e);
  // 	$.ajax({
  //     url: "http://localhost:8080/delmoviefromdb",
  //     dataType: 'json',
  //     type: 'DELETE',
  //     data: this.props.allMoviesDisp,
  //     success: function(data) {
  //       console.log("Movie deleted from db");
  //       //this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // },
  render: function () {
    return (
      <div className="allMoviesDisp">
      <h4 className="allmovieName">
      <div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<img alt="Bootstrap Image Preview" src={this.props.allMovies.Poster}/>
				</div>
				<div className="col-md-6" >
				{this.props.allMovies.Title}
				</div>
			</div>
		</div>

       </h4>
      </div>
    );
  }
});

module.exports = allMoviesDisplay;
