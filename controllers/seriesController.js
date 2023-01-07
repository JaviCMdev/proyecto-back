const Serie = require('../models/serie');

const SeriesController = {};

SeriesController.getAllSeries = async (req, res) => {

    try {
        let result = await Serie.find({});
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "No hemos podido encontrar la serie" })
        }
    } catch (error) {
        console.log(error);
    }
};

SeriesController.newSerie = async (req, res) => {

    try {
        let serie = await Serie.create({
            title: req.body.title,
            duration: req.body.duration,
            broadcast: req.body.broadcast,
            theater: req.body.theater,
            genre: req.body.genre,
            year: req.body.year,
            rating: req.body.rating,
            description: req.body.description
        })
        if (serie) {
            res.send({ "Message": `La serie: ${serie.title} ha sido añadida correctamente` })
        }
    } catch (error) {
        console.log(error)
    }

};

SeriesController.updateSerie = async (req, res) => {

    let _id = req.body._id;
    let newTitle = req.body.title;
    let newDuration = req.body.duration;
    let newBroadcast = req.body.broadcast;
    let newTheater = req.body.theater;
    let newGenre = req.body.genre;
    let newYear = req.body.year;
    let newRating = req.body.rating;
    let newDescription = req.body.description;

    try {
        let updated = await Serie.findOneAndUpdate(
            { _id: _id },
            {
                tittle: newTitle,
                duration: newDuration,
                broadcast: newBroadcast,
                theater: newTheater,
                genre: newGenre,
                year: newYear,
                rating: newRating,
                description: newDescription
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`La serie ha sido actualizada correctamente`)
        }
    } catch (error) {
        console.log("Error al actualizar la serie", error);
    }
};

SeriesController.deleteSerie = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Serie.findOneAndDelete({
            _id: _id
        })
        if (deleted) {
            res.send({ "Message": `La serie: ${deleted.title} ha sido eliminada` })
        }
    } catch (error) {
        console.log("Error al borrar la serie", error);
    }
};

module.exports = SeriesController;