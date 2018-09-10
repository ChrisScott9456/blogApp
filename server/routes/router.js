const express = require('express');
const router = express.Router();

//MongoDB Models
const Post = require('../models/post');

router.get('/', function(req, res) {
	res.render('index.ejs');
});


/******************************Post REST Calls******************************/

router.get('/getPost/:value', function(req, res) {
	Post.getPost(req.params.value, function(resp) {
		if(resp) {
			res.send(resp);
		}else {
			console.log('Failed to retrieve that record from Posts collection!');
		}
	});
});

router.post('/createPost', function(req, res) {
	let newPost = new Post({
		_id: req.body._id,
		comments: req.body.comments
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