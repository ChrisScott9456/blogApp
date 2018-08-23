//Express Setup
var express = require('express');
var app = express();

//Port
var port = 3000;

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){

	console.log('Received get request.');

});

app.listen(port, function(){
	console.log('Server started on port ' + port)
});