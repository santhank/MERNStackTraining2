var React = require('react');
var ReactDOM = require('react-dom');

var ModalPanel = React.createClass({

  render: function () {


    return (
      <div class="col-md-10">
   <a id="modal-629363" href="#modal-container-629363" role="button" class="btn" data-toggle="modal">Launch demo modal</a>

  <div class="modal fade" id="modal-container-629363" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">

          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            ×
          </button>
          <h4 class="modal-title" id="myModalLabel">
            Modal title
          </h4>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">

          <button type="button" class="btn btn-default" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>

    </div>

  </div>

</div>

    );
  }
});

module.exports = ModalPanel;
