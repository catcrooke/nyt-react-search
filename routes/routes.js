 //  Make sure you put this after all other GET routes
var Article = require ('../models/article-schema');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

// // * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles
// router.get('/api/saved', function(request, response){
// 	// newArticle.find(function (err, doc) {
//   	if (err) return console.error(err);
//  //  	console.log(doc);
// 	// });
// 	newArticle.find({}}).exec(callback);


// }); 

//  * `/api/saved` (post) - your components will use this to save an article to the database
router.post('/api/saved', function(request, response){
// post the articles to the backend and save in db as article .saved
	console.log(request.body);
	var newArticle = new Article(request.body);

	newArticle.save(function(err, doc) {
		if(err) throw err; 
		response.send(doc._id);
	});

});

//  * `/api/saved` (delete) - your components will use 
// this to delete a saved article in the database
// router.delete('/api/saved', function(request, response){
// // delete .find, .remove mongoose functions

// });

//  * `*` (get) - will load your single HTML page (with ReactJS) in public/index.html.
// Main "/" route. Will redirect to our rendered react application
// React app will control the application, can use * instead of /
router.get('*', function (req, res){
	res.sendFile(__dirname + "/public/index.html");
});

module.exports = router;