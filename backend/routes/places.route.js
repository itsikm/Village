var express = require('express');
var router = express.Router();
var Places = require('../models/places.model');

// Places Route
router.route('/')

    // create a place (accessed at POST http://localhost:8080/api/places)
    .post(function (req, res) {

        var places = new Places();    // create a new instance of the Places model
        places.title = req.body.title;  // set the places name (comes from the request)
        places.description = req.body.description;
        places.nightly_price = req.body.nightly_price;
        places.weekend_price = req.body.weekend_price;
        places.properties = req.body.properties;

        // save the bear and check for errors
        places.save(function (err) {
            if (err)
                res.send(err);

            res.json({message: 'Place created!'});
        });

    })

    // get all the places (accessed at GET http://localhost:8080/api/places)
    .get(function (req, res) {
        Places.find(function (err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

// on routes that end in /places/:bear_id
// ----------------------------------------------------
router.route('/:place_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function (req, res) {
        Places.findById(req.params.place_id, function (err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })

    .put(function (req, res) {

        // use our places model to find the place we want
        Places.findById(req.params.place_id, function (err, place) {

            if (err)
                res.send(err);

            place.title = req.body.title;  // update the place info
            place.properties = req.body.properties;  // update the place info

            // save the bear
            place.save(function (err) {
                if (err)
                    res.send(err);

                res.json({message: 'Place updated!'});
            });

        });
    })

    .delete(function (req, res) {
        Places.remove({
            _id: req.params.place_id
        }, function (err, bear) {
            if (err)
                res.send(err);

            res.json({message: 'Successfully deleted'});
        });
    });

module.exports = router;
