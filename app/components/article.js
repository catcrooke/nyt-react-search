var React = require("react");
var helpers = require('../utils/helpers');

var Article = React.createClass({ 

	onClick: function(e) {
		console.log('changing');
		var value = e.target.value;
		var id = e.target.id;
			
		var updatedState = {};
		updatedState[id] = value;
		this.setState(updatedState);
	},
	render:function() {		
		return (
			<div>
				<div>{this.props.name}</div>
				<div>{this.props.date}</div>				
				<div>{this.props.url}</div>
				<button onClick={this.onClick}>Save</button>			
			</div>
			)
	} 
});

module.exports = Article;
