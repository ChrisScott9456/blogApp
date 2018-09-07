const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.render('index.ejs');
});

router.get('/sendPost', function(req, res) {
	res.send('TEST RECEIVED');
})

module.exports = router;