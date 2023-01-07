const router = require('express').Router();

const moviesRouter = require('./views/moviesRouter');
const usersRouter = require('./views/usersRouter');
const seriesRouter = require('./views/seriesRouter');

router.use('/movies', moviesRouter);
router.use('/users', usersRouter);
router.use('/series', seriesRouter);

module.exports = router