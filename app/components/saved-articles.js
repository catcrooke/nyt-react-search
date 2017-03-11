// plural version of article component above saved

// * **Saved** - displays  all of the  Saved Articles that were searched and stored in the database

// // require helpers file 
var helpers = require('../utils/helpers');
var React = require("react");
var SavedArticle = require('./saved-article'); 

var SavedArticles = React.createClass({ 

	onClick: function(e) {
		console.log('changing');
		var value = e.target.value;
		var id = e.target.id;
			
		var updatedState = {};
		updatedState[id] = value;
		this.setState(updatedState);
	},

	// getInitialState() {
		
	// }

	render:function() {	

		var savedArticles = this.props.saved.map(function (savedArticle, index){
			console.log(savedArticle);

			return <SavedArticle
				name={savedArticle.title} 
				key={index} 
				date={savedArticle.date} 
				url={savedArticle.url} />;
		});	

		return (
			<div>
				<div className="row">
					<div className="col-sm-12">
					<br/>
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title"><strong><i className="fa fa-table"></i>Saved Articles</strong></h3>
							</div>
								{savedArticles}							
						</div>
					</div>
				</div>
			</div>
		)
	} 
});

module.exports = SavedArticles;