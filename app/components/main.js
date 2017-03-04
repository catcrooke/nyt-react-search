 // * **Main** - main-container div that holds the main layout and navigation. 

var helpers = require('../utils/helpers');
var React = require('react');
// var newArticle = require('./newarticle');
var Results = require('./results');
// var Saved = require('./saved');
var Search = require('./search');

var Main = React.createClass({
	getInitialState() {
    	return {results: []};	
  	},

	getQuery: function(term, start, end){
		return helpers.runQuery(term, start, end).then(function(result){
			console.log(result);
			this.setState({results: result}.bind(this));
		});
	},

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
				    		<li> <a href="#/main">Main</a></li>
				    		<li> <a href="#/search">Search</a></li>
							<li> <a href="#/saved">Saved</a></li>
						</ul>
				  </div>
				</nav>		
				<Search getQuery={this.getQuery}></Search>
				<Results results={this.state.results}></Results>
			</div>
			 // This component should also be able to hold sub-components Search and Saved
		)
	}

});

module.exports = Main;