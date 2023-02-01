const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    nameUser: {
        type: String
        // required: true
    },
    titleSerie: {
        type: String
    },
    rentalDate: {
        type: String
    },
    returnDate: {
        type: String
    },
    price: {
        type: String
    }
});

const Rental = mongoose.model('Rental', rentalSchema);
module.exports = Rental;