const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const app = express();

//Port
const port = 3000;

const config = require('./config/database');
const users = require('./server/routes/users');

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

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);


//Index Route
app.get('/', function(req, res){
	res.send('Received get request');
});

//Start Server
app.listen(port, function(){
	console.log('Server started on port ' + port)
});