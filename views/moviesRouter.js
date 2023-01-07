const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');

const MoviesController = require('../controllers/moviesController');

router.get("/getAll", MoviesController.getAllMovies);
router.post("/newMovie", MoviesController.newMovie);
router.put("/updateMovie", MoviesController.updateMovie);
router.delete("/deleteMovie", MoviesController.deleteMovie);
router.post("/name/", MoviesController.getMovieByName);
router.post("/genre/", MoviesController.getMovieByGenre);
router.post("/id/", MoviesController.getMovieById);
router.post("/toprated/", MoviesController.getMovieByTopRating);

module.exports = router;