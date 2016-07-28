var React= require('react');
var ReactDom = require('react-dom');


var home = React.createClass({
  render: function() {
    return (
      <div className ="home">
        <div className="container-fluid">
	       <div className="row">
		       <div className="col-md-12">
			        <div className="jumbotron">
				          <h2>
					             Movies!
				          </h2>
				          <p>
					            OMDB Movie Database
				          </p>
				          <p>
					             <a className="btn btn-primary btn-large" href="#">Learn more</a>
				          </p>
			        </div>
		        </div>
	      </div>
    </div>
    </div>
  );
  }
});
module.exports = home;
