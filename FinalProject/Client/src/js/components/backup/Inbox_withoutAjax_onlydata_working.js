var React= require('react');
var ReactDom = require('react-dom');
var InboxMessageList = require('./InboxMessageList');

var Inbox = React.createClass({

  getInitialState: function () {
            var data = [{
                                    "_id" : "1",
                                    "labelType": "sent",
                                    "msgFrom": "jiten@gmail.Com",
                                    "msgTo": "jiten@gmail.Com",
                                    "msgSubject": "Sample mail",
                                    "msgBody": "Sending a sample mail",
                                    "msgSentOn": "2016-07-27 19:43:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": true
    }, {
                                    "_id" : "2",
                                    "labelType": "indox",
                                    "msgFrom": "kirubha@gmail.Com",
                                    "msgTo": "kirubha@gmail.Com",
                                    "msgSubject": "Test mail",
                                    "msgBody": "test email",
                                    "msgSentOn": "2016-07-27 19:43:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": false
                    },
                    {
                                    "_id" : "3",
                                    "labelType": "indox",
                                    "msgFrom": "Ramesh@gmail.Com",
                                    "msgTo": "Ramesh@gmail.Com",
                                    "msgSubject": "Sample mail",
                                    "msgBody": "Sample email",
                                    "msgSentOn": "2016-07-27 19:43:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": true

                    },

                    {
                                    "_id" : "4",
                                    "labelType": "indox",
                                    "msgFrom": "Hemanth@gmail.Com",
                                    "msgTo": "Hemanth@gmail.Com",
                                    "msgSubject": "Hemanth mail",
                                    "msgBody": "Hemanth :test  mail",
                                    "msgSentOn": "2016-07-27 19:43:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": false

                    }, {
                                    "_id" : "5",
                                    "labelType": "indox",
                                    "msgFrom": "Ashok@gmail.Com",
                                    "msgTo": "Ashok@gmail.Com",
                                    "msgSubject": "Ashok mail",
                                    "msgBody": "Ashok :test  mail",
                                    "msgSentOn": "2016-07-27 19:43:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": false
                    }
    ];
            return { data };
        },

render: function() {
    return (
     <div className = "Inbox">
         <h3> Inbox </h3>
          <InboxMessageList AllData = {this.state.data} />
    </div>


    );
  }
});

module.exports = Inbox;
