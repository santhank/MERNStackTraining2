var React= require('react');
var {render} = require('react-dom');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');
var home = require('./components/home');
var Header = require('./components/Header');
var LeftPanel = require('./components/LeftPanel');
var Inbox = require('./components/Inbox');
var Sent = require('./components/Sent');
var MailBoxList = require('./components/MailBoxList');
var Message = require('./components/Message');
var MessagePanel = require('./components/MessagePanel');
var ModalPanel = require('./components/ModalPanel');


var MainComponent = React.createClass({
  render: function() {
    return (
      <div className ="MainComponent">
      <Header/>
      <LeftPanel/>
      <br/><br/>
      {this.props.children}
      </div>
    );
  }
});

render(
  <Router history={browserHistory}>
  <Route path="/" component={MainComponent} >
    <IndexRoute component={home}/>
     <Route path = "Inbox" component={Inbox}>
       <Route path="Message/:id" component={ModalPanel}/>
     </Route>
     <Route path = "Sent" component={Sent}>
       <Route path="Message/:id" component={Message}/>
    </Route>
  </Route>
  </Router>,
  document.getElementById('app')
);
