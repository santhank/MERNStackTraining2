var React= require('react');
var ReactDom = require('react-dom');
var MailBoxList = require('./MailBoxList');

var Inbox = React.createClass({

  getInitialState: function () {
            var data = [{
                                    "msgid" : "1",
                                    "labelType": "sent",
                                    "msgFrom": "Mailer1@gmail.Com",
                                    "msgTo": "Mailer1@gmail.Com",
                                    "msgSubject": "Sample mail",
                                    "msgBody": "Mailer1:Sending a sample mail",
                                    "msgSentOn": "2016-07-27 19:41:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": true
    }, {
                                    "msgid" : "2",
                                    "labelType": "indox",
                                    "msgFrom": "Mailer2@gmail.Com",
                                    "msgTo": "Mailer2@gmail.Com",
                                    "msgSubject": "Test mail",
                                    "msgBody": "Mailer2:test email",
                                    "msgSentOn": "2016-07-27 19:42:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": false
                    },
                    {
                                    "msgid" : "3",
                                    "labelType": "indox",
                                    "msgFrom": "Mailer3@gmail.Com",
                                    "msgTo": "Mailer3@gmail.Com",
                                    "msgSubject": "Sample mail",
                                    "msgBody": "Mailer3:Sample email",
                                    "msgSentOn": "2016-07-27 19:43:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": true

                    },

                    {
                                    "msgid" : "4",
                                    "labelType": "indox",
                                    "msgFrom": "Mailer4@gmail.Com",
                                    "msgTo": "Mailer4@gmail.Com",
                                    "msgSubject": "Sample mail",
                                    "msgBody": "Mailer4:Sample :test  mail",
                                    "msgSentOn": "2016-07-27 19:44:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": false

                    }, {
                                    "msgid" : "5",
                                    "labelType": "indox",
                                    "msgFrom": "Mailer5@gmail.Com",
                                    "msgTo": "Mailer5@gmail.Com",
                                    "msgSubject": "Sample mail",
                                    "msgBody": "Mailer5:Sample :test  mail",
                                    "msgSentOn": "2016-07-27 19:45:37 +0100",
                                    "msgReceivedOn": "2016-07-27 19:43:37 +0100",
                                    "hasAttachment": false,
                                    "isRead": false
                    }
    ];
            return { data };
        },
//   getInitialState:function()
// 	{
// 		return{AllMovieFrmDb:[]};
// 	},
//   dispmovies:function(){
//   //   //var addMovie = this.props.allMovies;
//   //   //console.log(e);
//     $.ajax({
//       url: "http://localhost:8080/getmoviefromdb",
//       dataType: 'json',
//       type: 'GET',
//       success: function(data) {
//         console.log("Ajax:GET: Success");
//         console.log(data);
//         this.setState({AllMovieFrmDb: data});
//         //this.setState({data: data});
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },
// componentWillMount(){
//   this.dispmovies();
// },
render: function() {
    return (
     <div >
          <MailBoxList AllData = {this.state.data} />
    </div>


    );
  }
});

module.exports = Inbox;
