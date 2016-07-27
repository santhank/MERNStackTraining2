var React= require('react');
var ReactDom = require('react-dom');
var Link = require('react-router').Link;

var LeftPanel = React.createClass({
render:function()
{
  return(

    <div className="LeftPanel col-md-2 left-panel">

      <ul >
        <li className="active"><Link to = "/">Home</Link></li>
        <li><Link to = "/Inbox">Inbox</Link></li>
        <li><Link to = "/Sent">Sent</Link></li>
      </ul>
    </div>

    );

  }
 });

module.exports = LeftPanel;
