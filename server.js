var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var cors = require('cors');

var app = express();

//Port
var port = 3000;

var config = require('./config/database');
var users = require('./server/routes/users');

//Connect to MongoDB
mongoose.connect(config.database, { useNewUrlParser: true });

//On MongoDB Connection
mongoose.connection.on('connected', function(req, res) {
	console.log('Connected to database ' + config.database);
});

//On MongoDB Error 
mongoose.connection.on('error', function(err) {
	console.log('Database error ' + err);
});

//Body-Parser Middleware
app.use(bodyParser.json());

//Set Static Folder
app.use(express.static(path.join(__dirname + 'public')));

//CORS Middleware
app.use(cors());

app.use('/users', users);


//Index Route
app.get('/', function(req, res){
	res.send('Received get request');
});

//Start Server
app.listen(port, function(){
	console.log('Server started on port ' + port)
});