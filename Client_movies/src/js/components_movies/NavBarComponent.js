var React= require('react');
var ReactDom = require('react-dom');
var Link = require('react-router').Link;
/*var allMovies = require('/allMovies');
var addMovies = require('/addMovies');
var home = require('/home');*/

var NavBarComponent = React.createClass({
render:function()
{
  return(
<nav className="navbar navbar-default" >
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed"  aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><Link to = "/">home</Link></li>
        <li><Link to = "/allMovies">All Movies</Link></li>
        <li><Link to = "/MovieBox">Add Movies</Link></li>
      </ul>
    </div>
  </div>
</nav>
    );

  }
 });

module.exports = NavBarComponent;
