const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

//User Schema
const User = require('../models/users');

// Register
router.post('/register', function(req, res) {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, function(err, user) {
		if(err) {
			res.json({success: false, msg: 'Failed to register user'});
		}else {
			res.json({success: true, msg: 'User successfully registered'});
		}
	});
});

router.post('/auth', function(req, res, next) {
	res.send('AUTHENTICATE');
});


router.get('/profile', function(req, res, next) {
	res.send('PROFILE');
});

module.exports = router;