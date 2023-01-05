const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
    },
    description: {
        type: String,
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;