var React = require("react");
var helpers = require('../utils/helpers');
var Article = require('./article');

var Results = React.createClass({ 

	render:function() {	
		var results = this;

		console.log(this.props.result);
		var articles = this.props.results.map(function (article, index){
			return (<Article name={article.headline.main} key={index} date={article.pub_date} url={article.web_url} savedQuery={results.props.savedQuery} />)
		});

		return(
			<div>
				<div className="row">
					<div className="col-sm-12">
					<br/>
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title"><strong><i className="fa fa-table"></i>Results</strong></h3>
							</div>
							{articles}
						</div>
					</div>
				</div>
			</div>
			)
		}	  
});

module.exports = Results;