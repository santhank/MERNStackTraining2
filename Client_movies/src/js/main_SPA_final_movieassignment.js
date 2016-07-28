var React= require('react');
var {render} = require('react-dom');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');
var home = require('./components/home');
var NavBarComponent = require('./components/NavBarComponent');
var allMovies = require('./components/allMovies');
var MovieBox = require('./components/MovieBox');



var MainComponent = React.createClass({
  render: function() {
    return (
      <div className ="MainComponent">
      <NavBarComponent />
	  <br/><br/>
      {this.props.children}
      </div>
    );
  }
});

render(
  <Router history={browserHistory} >
  <Route path="/" component={MainComponent} >
  <IndexRoute component={home}/>
  <Route path="allMovies" component={allMovies} />
  <Route path="MovieBox" component={MovieBox}/>
  </Route>
</Router>,
  document.getElementById('app')
);
