const router = require('express').Router();

// const moviesRouter = require('./views/moviesRouter');
const usersRouter = require('./views/usersRouter');

// router.use('/movies', moviesRouter);
router.use('/users', usersRouter);

module.exports = router