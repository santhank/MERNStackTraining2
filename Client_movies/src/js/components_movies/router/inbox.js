// Make a new component to render inside of Inbox
const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {/* Render the child route component */}
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        {/* add some nested routes where we want the UI to nest */}
        {/* render the stats page when at `/inbox` */}
        <IndexRoute component={InboxStats}/>
        {/* render the message component at /inbox/messages/123 */}
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById("app")
