var React = require('react');
var ReactDOM = require('react-dom');


var Message = React.createClass({
  onAdd:function(){
    	//var addMovie = this.props.allMovies;
    	//console.log(e);
    	$.ajax({
        url: "http://localhost:8080/addmailtodb",
        dataType: 'json',
        type: 'POST',
        data: this.props.Msg,
        success: function(data) {
          console.log("data instered in db");
          //this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },

  render: function () {
    return (
      <div className="Message">
        <div className="container-fluid">
        <a href={"#myModal"+ this.props.Msg.msgid}>
        <span>{this.props.Msg.msgFrom}</span>
        <span>{this.props.Msg.msgSubject}</span>
        <span>{this.props.Msg.msgReceivedOn}</span>
        <span>{this.props.Msg.isRead}</span>
        </a>
        <span>
          <button type="button"  data-toggle="modal" data-target={"#myModal"+this.props.Msg.msgid}>Open Msg</button>
            <div className="modal fade" id={"myModal"+this.props.Msg.msgid} role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4>  {this.props.Msg.msgFrom}</h4>
                    <h4>  {this.props.Msg.msgSentOn}</h4>

                  </div>
                  <div className="modal-body">
                    <p>{this.props.Msg.msgBody}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

        </span>

				  <input type="submit"  value="Add" onClick={this.onAdd} />
			   </div>
			</div>
    );
  }
});

module.exports = Message;
