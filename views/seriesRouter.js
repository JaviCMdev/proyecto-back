const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');

const SeriesController = require('../controllers/seriesController');

// Get all series
router.get("/getAll", async (req, res) => {
    res.json(await SeriesController.getAllSeries(req.query))
});
// Create a new serie
router.post("/newSerie", async (req, res) => {
    res.json(await SeriesController.newSerie(req.body))
});
router.put("/updateSerie", SeriesController.updateSerie);
router.delete("/deleteSerie", SeriesController.deleteSerie);
router.get("/id/:_id", SeriesController.getSerieById);
router.get("/toprated/", SeriesController.getSerieByTopRating);
router.get("/broadcast/", SeriesController.getSerieByBroadcast);
router.get("/theater/", SeriesController.getSerieByTheater);
router.post("/newcollection", SeriesController.postCollectionSeries)

module.exports = router;