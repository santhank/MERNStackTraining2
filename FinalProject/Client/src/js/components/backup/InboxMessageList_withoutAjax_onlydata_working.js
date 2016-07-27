var React = require('react');
var ReactDOM = require('react-dom');
var InboxMessage =require('./InboxMessage');

var InboxMessageList = React.createClass({

  render: function () {
    var allDataMap = this.props.AllData.map(function(message){
    		return(

    			<InboxMessage Msg={message} key={message._id}></InboxMessage>

    			)
    	})

    return (
      <div className="InboxMessageList">
        <h2> Inbox Message data </h2>
          {allDataMap}
      </div>);
}
});

module.exports = InboxMessageList;
