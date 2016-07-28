var React= require('react');
var ReactDOM = require('react-dom');
var { Router, Route, Link, browserHistory, IndexRoute  } = require('react-router');
var Home = require('./components/aboutContacts/Home');
var About = require('./components/aboutContacts/About');
var Contact = require('./components/aboutContacts/Contact');

var App = React.createClass({
  render: function() {
    return (
      <div>
         <ul>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Contact">Contact</Link></li>
         </ul>

        {this.props.children}
      </div>
    );
  }
});
module.exports = App;

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>

), document.getElementById('app'));
