var React = require("react");
var helpers = require('../utils/helpers');

var Results = React.createClass({ 
	render:function() {	
		return(
			<div>
				<div className="row">
					<div className="col-sm-12">
					<br/>
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h3 className="panel-title"><strong><i className="fa fa-table"></i>Results</strong></h3>
							</div>

							<div className="panel-body" id="wellSection">
								<button>Save</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
		}	
});

module.exports = Results;