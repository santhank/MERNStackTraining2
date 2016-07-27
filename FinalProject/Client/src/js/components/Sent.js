var React= require('react');
var ReactDom = require('react-dom');
var MailBoxList = require('./MailBoxList');

var Sent = React.createClass({
  render: function() {
    return (
     <div className = "Inbox">
         <h3> Sent Box </h3>
          <MailBoxList />
    </div>


    );
  }
});

module.exports = Sent;
