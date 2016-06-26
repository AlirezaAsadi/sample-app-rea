var express = require('express');
var app = express();
app.use(express.static(__dirname + '/../static'));      // Static files
app.set('view engine', 'ejs');                          // set the view engine to ejs
app.set('views', __dirname + '/views');                 // Template path


// Get data handler
app.use('/service/getData', function(req, res){
    var data =  require('./data.json');
    res.send(data);
});

// Root path handler
app.use('/', function(req, res){
    res.render('index')
});


app.listen(8888, function () {
  console.log('App is listening on localhost:8888!');
});

