const router = require('express').Router();

const moviesRouter = require('./views/moviesRouter');
const usersRouter = require('./views/usersRouter');
const seriesRouter = require('./views/seriesRouter');
const rentalsRouter = require('./views/rentalsRouter');

router.use('/movies', moviesRouter);
router.use('/users', usersRouter);
router.use('/series', seriesRouter);
router.use('/rentals', rentalsRouter)

module.exports = router