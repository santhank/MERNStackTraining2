var React = require('react');
var ReactDOM = require('react-dom');
var Message =require('./Message');

var MailBoxList = React.createClass({

  render: function () {
    var allDataMap = this.props.AllData.map(function(message){
    		return(
          <Message Msg={message} key={message.msgid}></Message>

    			)
    	})

    return (

      <div className="MailBoxList col-md-10" >


              <h2> Inbox: Message </h2>
                {allDataMap}
      </div>
    );
    }
  });

module.exports = MailBoxList;
