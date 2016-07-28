var React= require('react');
var ReactDom = require('react-dom');

var Movies = React.createClass({
  render: function() {
    return (
      <div className = "Movies">
      <div className = "container-fluid">
        <h1> All Movies </h1>
    </div>
    </div>

    );
  }
});

module.exports = Movies;
