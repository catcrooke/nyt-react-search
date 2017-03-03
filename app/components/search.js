 // * **Search** - queries the NYT API for articles. Displays API search results from another 
 // possible **Query** component and **Results** component. Gives the user the ability to save 
 // an article to their Saved Articles.
// require helpers file 
var helpers = require('../utils/helpers');

var Search = React.createClass({ 
	getInitialState() {
		term: 0,
		start: 0,
		end: 0
	},
	onSubmit: function() {
		// helpers.runQuery(this.state.term, this.state.startDate, this.state.endDate) {

		// }
	},
	onChange: function() {
		this.setState({
			term: '',
			start: '',
			end: ''
		})
	},
	render:function() {

		
		return (
	 	<div>
	 		<form>
		 		<input type="text" id="term" value={/* value */} onChange={/* */}> </input>
		 		<input type="text" id="start" value={/* value */} onChange={/* */}> </input>
		 		<input type="text" id="end" value={/* value */} onChange={/* */}> </input>
		 		<input type="Submit" value="Submit"/>
	 		</form>
	 	</div>
		)
	}

});