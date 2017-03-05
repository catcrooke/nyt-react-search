var React = require("react");
var helpers = require('../utils/helpers');
var Article = require('./article');

var Results = React.createClass({ 

	render:function() {	


		console.log(this.props.result);
		var articles = this.props.results.map(function (article){
			return (<Article name={article.headline.main} key={article._id} date={article.pub_date} url={article.web_url}  />)
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