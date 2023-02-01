const Rental = require('../models/rental');
const User = require('../models/user');
const Serie = require('../models/serie');

const RentalsController = {};

RentalsController.getAllRentals = async (req, res) => {

    try {
        let result = await Rental.find({})
        // .populate('idUser')
        // .populate('idSerie')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No hay ningun alquiler."})
        }
    } catch (e) {
        console.error(e)
    }
}

RentalsController.newRental = async (req, res) => {

    try {
        // let foundUser = await User.findOne({ id: req.body.titleUser })
        // console.log("usuario", foundUser)
        // if (foundUser.length > 0) {
        //     //res.send(result)
        // }
        // let foundSerie = await Serie.findOne({ id: req.body.titleSerie })
        // console.log("serie", foundSerie)
        // if (foundSerie.length > 0) {
        //     //res.send(result)
        // }
        let user = await Rental.create({
            nameUser: req.body.nameUser,
            titleSerie: req.body.titleSerie,
            rentalDate: req.body.rentalDate,
            returnDate: req.body.returnDate,
            price: req.body.price
        })

        if (user) {
            res.send({ "Message": 'El alquiler se ha realizado con exito'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error con el alquiler'})
        }
    } catch (e) {
        console.error(e)
    }
}

module.exports = RentalsController