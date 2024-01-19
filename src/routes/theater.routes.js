const express = require('express');
const router = express.Router();
const theaterController = require('../controllers/theater.controller');


router.post("/theaters", theaterController.createTheater )
router.post("./theaters/:theaterid", theaterController.addShow)

router.get("/theaters", theaterController.getAllTheaters)
router.get('/theaters/:theaterId/dates', theaterController.getDatesForTheater);
router.get('/theaters/:theaterId/movies', theaterController.getMoviesForTheaterOnDate);

module.exports = router;