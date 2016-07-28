var React= require('react');
var ReactDOM = require('react-dom');
var { Router, Route, Link, browserHistory, IndexRoute  } = require('react-router');


// var App = React.createClass({
//  render: function() {
//       return (
//          <div>
//             <ul>
//                <li><Link>Home</Link></li>
//                <li><Link>About</Link></li>
//                <li><Link>Contact</Link></li>
//             </ul>
//
//            {this.props.children}
//          </div>
//       )
//    }
// }

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

var Home = React.createClass({
  render: function() {
    return (
         <div>
            <h1>Home...</h1>
         </div>
    );
  }
});
module.exports = Home;


var About = React.createClass({
  render: function() {
    return (
         <div>
            <h1>About...</h1>
         </div>
    );
  }
});
module.exports = About;

var Contact = React.createClass({
  render: function() {
    return (
         <div>
            <h1>Contact...</h1>
         </div>
    );
  }
});
module.exports = Contact;

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
