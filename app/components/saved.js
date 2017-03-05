// * **Saved** - displays one Saved Article that were searched and stored in the database

// // require helpers file 
var helpers = require('../utils/helpers');
var React = require("react");

var savedArticle = React.createClass({ 

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
			</div>
		)
	} 
});

module.exports = savedArticle;
