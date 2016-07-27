var React= require('react');
var ReactDom = require('react-dom');


var home = React.createClass({
  render: function() {
    return (
      <div className ="home">
        <div className="container-fluid">
	       <div className="row">
         <div className="col-md-2">
         </div>
		       <div className="col-md-10" >
			        <div className="jumbotron">
				          <h2>
					             MailBox !
				          </h2>

			        </div>
		        </div>
	      </div>
    </div>
    </div>
  );
  }
});
module.exports = home;
