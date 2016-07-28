var React= require('react');
var ReactDom = require('react-dom');

var login = React.createClass({
  render: function() {
    return (
      <div className = "login">
      <div className = "container-fluid">
        <h1> Enter the login username and password </h1>
    </div>
    </div>

    );
  }
});

module.exports = login;
