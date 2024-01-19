const express = require('express');
const router = express.Router();
const theaterController = require('../controllers/theater.controller');


router.post("/theaters", theaterController.createTheater)
router.post("/theaters/:theaterId/addShow", theaterController.addShow)

router.get("/theaters", theaterController.getAllTheaters)
router.get('/theaters/:theaterId/dates', theaterController.getDatesForTheater);
router.get('/theaters/:movieId/movies/:date', theaterController.getMoviesForTheaterOnDate);

module.exports = router;