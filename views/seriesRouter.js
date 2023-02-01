const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');

const SeriesController = require('../controllers/seriesController');

router.get("/getAll", SeriesController.getAllSeries);
router.post("/newSerie", SeriesController.newSerie);
router.put("/updateSerie", SeriesController.updateSerie);
router.delete("/deleteSerie", SeriesController.deleteSerie);
router.get("/name", SeriesController.getSerieByNameOrGenre);
router.get("/id/:_id", SeriesController.getSerieById);
router.get("/toprated/", SeriesController.getSerieByTopRating);
router.get("/broadcast/", SeriesController.getSerieByBroadcast);
router.get("/theater/", SeriesController.getSerieByTheater);

module.exports = router;