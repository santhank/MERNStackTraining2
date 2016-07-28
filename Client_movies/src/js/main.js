var React= require('react');
var {render} = require('react-dom');
var {Router, Route, IndexRoute, browserHistory} = require('react-router');
var home = require('./components/home');
var MailHeader = require('./components/MailHeader');
var MailLabels = require('./components/MailLabels');
var Inbox = require('./components/Inbox');
var Sent = require('./components/Sent');
var InboxMessageList = require('./components/InboxMessageList');
var InboxMessage = require('./components/InboxMessage');


var MainComponent = React.createClass({
  render: function() {
    return (
      <div className ="MainComponent">
      <MailHeader/>
      <MailLabels/>
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
     <Route path = "Inbox" component={Inbox}>
      <Route path = "InobxMessageList" component={InboxMessageList}>
        <Route path="InboxMessage" component={InboxMessage}/>
      </Route>
     </Route>
     <Route path = "Sent" component ={Sent}>
      <Route path = "InboxMessageList" component={InboxMessageList}>
        <Route path="InboxMessage" component={InboxMessage}/>
      </Route>
    </Route>
  </Route>
</Router>,
  document.getElementById('app')
);
