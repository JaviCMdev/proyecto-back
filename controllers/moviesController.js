const Movie = require('../models/movie');

const MoviesController = {};

MoviesController.getAllMovies = async (req, res) => {

    try {
        let result = await Movie.find({});
        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "No hemos podido encontrar la pelicula" })
        }
    } catch (error) {
        console.log(error);
    }
};

MoviesController.newMovie = async (req, res) => {

    try {
        let movie = await Movie.create({
            title: req.body.title,
            duration: req.body.duration,
            genre: req.body.genre,
            year: req.body.year,
            rating: req.body.rating,
            description: req.body.description
        })
        if (movie) {
            res.send({ "Message": `La pelicula: ${movie.tittle} ha sido añadida correctamente` })
        }
    } catch (error) {
        console.log(error)
    }

};

MoviesController.updateMovie = async (req, res) => {

    let _id = req.body._id;
    let newTitle = req.body.title;
    let newDuration = req.body.duration;
    let newGenre = req.body.genre;
    let newYear = req.body.year;
    let newRating = req.body.rating;
    let newDescription = req.body.description;

    try {
        let updated = await Movie.findOneAndUpdate(
            { _id: _id },
            {
                tittle: newTitle,
                duration: newDuration,
                genre: newGenre,
                year: newYear,
                rating: newRating,
                description: newDescription
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`La pelicula ha sido actualizada correctamente`)
        }
    } catch (error) {
        console.log("Error al actualizar la pelicula", error);
    }
};

MoviesController.deleteMovie = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Movie.findOneAndDelete({
            _id: _id
        })
        if (deleted) {
            res.send({ "Message": `La pelicula: ${deleted.tittle} ha sido eliminada` })
        }
    } catch (error) {
        console.log("Error al borrar la pelicula", error);
    }
};

module.exports = MoviesController;