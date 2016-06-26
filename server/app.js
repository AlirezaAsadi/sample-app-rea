var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
app.use(express.static(__dirname + '/../static'));      // Static files
app.engine('html', mustacheExpress());                  // Template engine extension
app.set('view engine', 'html');                         // Template engine type         
app.set('views', __dirname + '/views');                 // Template path

// Root path handler
app.use('/', function(req, res){
    res.render('index')
});


// Get data handler
app.use('/service/getData', function(req, res){
    var data =  require('./data.json');
    res.send(data);
});


app.listen(8888, function () {
  console.log('App is listening on localhost:8888!');
});

