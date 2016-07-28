  getInitialState: function() {
    return {data: []};
  },

$.ajax({
url:"http://localhost:8080/movieurlcrud",
type:'GET',
dataType:'json',
success:function(data){
	this.setState({data:data.search})
}.bind(this),
error:function(xhr,status,err){
	console.error("http://localhost:8080/movieurlcrud",status,err.toString());
}.bind(this)
});
}





****************
getInitialState: function() {
    return {data: []};
  	},

  componentDidMount: function() {
	$.ajax({
	url:"http://localhost:8080/movieurlcrud",
	type:'GET',
	dataType:'json',
	success:function(data){
		this.setState({data:data.search})
	}.bind(this),
	error:function(xhr,status,err){
		console.error("http://localhost:8080/movieurlcrud",status,err.toString());
	}.bind(this)
	});
	},