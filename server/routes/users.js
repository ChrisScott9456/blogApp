var express = require('express');
var router = express.Router();

// Register
router.get('/register', function(req, res, next) {
	res.send('REGISTER');
});

router.post('/auth', function(req, res, next) {
	res.send('AUTHENTICATE');
});


router.get('/profile', function(req, res, next) {
	res.send('PROFILE');
});


router.get('/validate', function(req, res, next) {
	res.send('VALIDATE');
});

module.exports = router;