// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express         = require('express');        // call express
var app             = express();                 // define our app using express
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var autoIncrement   = require('mongoose-auto-increment');
var config          = require('./backend/config');

// MongoDB connection
var connection = mongoose.connect(config.mongodb.host);
autoIncrement.initialize(connection);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
var places = require('./backend/routes/places.route');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/api/places', places);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
