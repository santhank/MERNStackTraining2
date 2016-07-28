var React = require('react');
var ReactDOM = require('react-dom');


var Movie = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
	$.ajax({
	url:"http://localhost:8080/movieurlcrud",
	type:'GET',
	dataType:'json',
	success:function(data){
		this.setState({data:data.search})
	}.bind(this),
	error:function(xhr,status,err){
		console.error("http://localhost:8080/movieurlcrud",status,err.toString());
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
					<img alt="Bootstrap Image Preview" src="../src/image/Terminator.jpg"/>
				</div>
				<div className="col-md-6">
					<h2>
						Terminator
					</h2>
					<p>
						Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
					</p>
					<p>
						<a className="btn" href="#">View details »</a>
					</p>
				</div>
			</div>
		</div>

       </h4>
      </div>
    );
  }
});

module.exports = Movie;
