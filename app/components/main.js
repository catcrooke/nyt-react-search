 // * **Main** - main-container div that holds the main layout and navigation. 

var React = require('react');
var newArticle = require('./newarticle');
var Results = require('./results');
var Saved = require('./saved');
var Search = require('./search');

var Main = React.createClass({
	render: function() {
		return (
			<div> 
				<div className="jumbotron">
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times React Search</strong></h1>
				</div>

				{/*Row for Searching New York Times*/}
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container">
				    	<ul>
				    		<li> <a href="#/main"</a> Main</li>
				    		<li> <a href="#/search"</a> Search</li>
							<li> <a href="#/saved"</a> Saved</li>
							// <li> <a href="#/saved"</a> Results</li>
							// <li> <a href="#/newArticle"</a> New Article</li>
						</ul>
				  </div>
				</nav>		
			</div>
			 // This component should also be able to hold sub-components Search and Saved
		)
	}

});

module.exports = Main;