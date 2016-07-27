var React= require('react');
var ReactDom = require('react-dom');


var Header = React.createClass({
  render: function() {
    return (
      <div className="Header">
      	<div className="row">
      		<div className="col-md-10">
      			<div className="page-header">
      				<h3>
      					MailBox! <small>@Speed of Light</small>
      				</h3>
      			</div>
      		</div>
      		<div className="col-md-2">
      			<img alt="Bootstrap Image Preview" src="../images/mailbox.jpg" width="100" />
      		</div>
      	</div>
      </div>

  );
  }
});
module.exports = Header;
