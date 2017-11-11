var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  //Word = require('./api/models/wordModel'), //created model loading here
  WordGroup = require('./api/models/wordGroupModel'),
  Unit = require('./api/models/wordModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/learn_english', {
  useMongoClient: true,
}); 

// TODO just on development
app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true); 
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELTE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type'); 
  next() // pass control to the next handler
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));


var routes = require('./api/routes/wordRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);