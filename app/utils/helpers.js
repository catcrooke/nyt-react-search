// hit NYT API with helper functions
var axios = require('axios');
var NYT_API_KEY = 'bc26893fc2a24a038f860dc78a4919e8';

var helpers = {

	runQuery: function(term, start, end) {
		var params = {
			'api-key': NYT_API_KEY,
			'term': term,
			'start': start,
			'end': end
		};
		// params.term = term;
		// params.start = start;
		// params.end = end;
		return axios.get('https://api.nytimes.com', params)
			.then(function (response) {
			    console.log(response);
			 })
			.catch(function (error) {
				console.log(error);
			});
	},

	getSaved: function() {

	},

	//postSaved, and deleteSaved functions


};

module.exports = helpers;