var React = require('react');
var ReactDOM = require('react-dom');



var MovieForm = React.createClass({

  getInitialState: function() {
    return{Title:""}
  },
  handleTitleChange:function(e){
    this.setState({Title:e.target.value});
    //console.log(this.state.Title);
  },
  submitTitle: function(e){
    e.preventDefault();
    {
      this.props.handlesubmitTitle({Title:this.state.Title});
    }
  },
  render: function () {
    return (
      <div className="movieForm">

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h2> Movie Form </h2>
                  <form onSubmit={this.submitTitle} className="movieForm">
                    <input
                      type="text"
                      className="form-control"
                      name="Title"
                      placeholder="Movie Name"
                      value={this.state.Title}
                      onChange={this.handleTitleChange}
                      />
                    <input type="submit" className="btn btn-primary btn-block" value="Search" />
                  </form>


              </div>
            </div>
          </div>      


      </div>
    );
  }
});

module.exports = MovieForm;