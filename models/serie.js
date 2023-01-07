const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serieSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    broadcast: {
        type: Boolean,
        required: true
    },
    theater: {
        type: Boolean,
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

const Serie = mongoose.model('Serie', serieSchema);
module.exports = Serie;