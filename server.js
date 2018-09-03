var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

var users = require('./server/routes/users');

//Port
var port = 3000;

//Set Static Folder
app.use(express.static(path.join(__dirname + '/public')));

//Body-Parser Middleware
app.use(bodyParser.json());


app.use('/users', users);


//Index Route
app.get('/', function(req, res){
	console.log('Received get request.');
});

//Start Server
app.listen(port, function(){
	console.log('Server started on port ' + port)
});