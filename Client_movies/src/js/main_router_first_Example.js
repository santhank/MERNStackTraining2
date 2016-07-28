var React = require('react');
var {render} = require('react-dom');
// First we import some components...
var { browserHistory,Router, Route, IndexRoute,Link } = require('react-dom');
var About = require('./components/router/login');
var Movies = require('./components/router/Movies');

// Then we delete a bunch of code from App and
// add some <Link> elements...

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Link>s */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    );
  }
});

// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="movies" component={Movies} />
    </Route>
  </Router>
), document.getElementById('app')
);