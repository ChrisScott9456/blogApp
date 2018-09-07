const express = require('express');
const router = express.Router();

//MongoDB Models
const Post = require('../models/post');

router.get('/', function(req, res) {
	res.render('index.ejs');
});

router.post('/createPost', function(req, res) {
	let newPost = new Post({
		_id: req.body._id
	});

	Post.createPost(newPost, function(err) {
		if(err) {
			res.send('Failed to create new post details: ' + err);
		}else {
			res.send('Successfully created new post details!');
		}
	});
});

//Redirect to '/' when GET is sent (such as on page refresh)
router.get('/post', function(req, res) {
	res.redirect('/');
});

module.exports = router;