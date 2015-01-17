var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var PlacesSchema = new Schema({
    user_id: Number,
    title: String,
    description: String,
    nightly_price: Number,
    weekend_price: Number,
    properties: {
        place_type: String,
        bedrooms: Number,
        bathrooms: Number,
        beds: Number,
        accommodates: Number,
        amenities: [String]
    },
    location: {
        address: String,
        city: String,
        lat: Number,
        lng: Number
    },
    pictures: {
        main: String,
        list: [String]
    },
    feedback: {
        total_rank: Number,
        summary: {
            accuracy: Number,
            cleanliness: Number,
            value: Number,
            location: Number
        },
        comments: [{
            user_id: Number,
            accuracy: Number,
            cleanliness: Number,
            value: Number,
            location: Number
        }]
    },
    hidden: Boolean
});

PlacesSchema.plugin(autoIncrement.plugin, 'Places');
module.exports = mongoose.model('Places', PlacesSchema);
