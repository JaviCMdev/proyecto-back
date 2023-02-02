const Serie = require('../models/serie');

const SeriesController = {};

SeriesController.newSerie = async (moviedata) => {

    try {
        let serie = await Serie.create({
            title: moviedata.title,
            duration: moviedata.duration,
            broadcast: moviedata.broadcast,
            theater: moviedata.theater,
            genre: moviedata.genre,
            year: moviedata.year,
            rating: moviedata.rating,
            description: moviedata.description,
            poster_path: moviedata.poster_path
        })
        if (serie) {
            return ({ "Message": `La serie: ${serie.title} ha sido añadida correctamente` })
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

SeriesController.getAllSeries = async (search) => {

    const filter = {}

    try {
        if (search.title) filter.title = new RegExp(search.title, "i")
        if (search.genre) filter.genre = new RegExp(search.genre, "i")
        let foundSerie = await Serie.find({
            $or:[
                { "title": filter.title },
                { "genre": filter.genre }
            ]
            })
        return (foundSerie)
    } catch (error) {
        return ({ error: error.message });
    }
}
SeriesController.getSeries = async () => {

    try {
        let foundSerie = await Serie.find({
            })
        return (foundSerie)
    } catch (error) {
        return ({ error: error.message });
    }
};

SeriesController.getSerieById = async (req, res) => {

    let _id = req.params._id;

    try {
        let foundSerie = await Serie.find({
            _id: _id
        })
        if (foundSerie.length > 0) {
            res.send(foundSerie)
        } else {
            res.send({ "Message": "Titulo no encontrados" })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.getSerieByTopRating = async (req, res) => {

    try {

        let foundSerie = await Serie.find({
            rating: "5"
        })
        if (foundSerie.length > 0) {
            res.send(foundSerie)
        } else {
            res.send({ "Message": "Titulo o genero no encontrados" })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.getSerieByBroadcast = async (req, res) => {

    try {

        let foundSerie = await Serie.find({
            broadcast: true
        })
        if (foundSerie.length > 0) {
            res.send(foundSerie)
        } else {
            res.send({ "Message": "Titulo no encontrado" })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.getSerieByTheater = async (req, res) => {

    try {

        let foundSerie = await Serie.find({
            theater: true
        })
        if (foundSerie.length > 0) {
            res.send(foundSerie)
        } else {
            res.send({ "Message": "Titulo no encontrado" })
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.postCollectionSeries = async (req, res) => {

    //     try {
    //     req.body.forEach( (serie)=> SeriesController.newSerie(serie.body, res))
    //     console.log("el body", req.body)
    //     console.log("request body aqui", req.body[0].title)
    //     } catch (error) {
    //         res.json({ error: error.message });
    //     }
    // }

    try {
        const data = req.body
        for (let i = 0; data.length < i; i++) {
            req.body = data[i]
            SeriesController.newSerie(req, res)
        }
    } catch (e) {
        res.json({ error: e.message });
    }
}

module.exports = SeriesController;