// const asyncHandler = require("express-async-handler");

const Theater = require("../models/theater.models")
const Movie = require("../models/movie.models")
const Showtime = require("../models/showTime.models")
const generateUpcomingDates = require('../helper/date.helper')



// theater.controller.js
exports.getAllTheaters = async (req, res) => {
    try {
        const theaters = await Theater.find({ city: req.query.city })
        res.json(theaters);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createTheater = async (req, res) => {
    try {
        const name = req.body.name
        const city = req.body.city
        if (!name || !city) {
            res.status(400).json({ error: "All fields are mandatory!" })
        } else {
            await Theater.create({
                name,
                city
            })

            res.status(200).json({ message: "Theater added successfully" });
        }
    } catch (error) {
        console.error("Error creating theater:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.addShow = async (req, res) => {
    try {
        const title = req.body.title

        if (!title) {
            res.status(400).json({ error: "All fields are mandatory!" })
        } else {
            await Movie.create({
                title
            })

            res.status(200).json({ message: "Movie added successfully" });
        }
    } catch (error) {
        console.error("Error creating theater:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getDatesForTheater = async (req, res) => {
    try {
        const theater = await Theater.findById(req.params.theaterId);

        if (!theater) {
            return res.status(404).json({ error: "Theater not found" });
        }

        const upcomingDates = generateUpcomingDates(7);
        res.json(upcomingDates);
    } catch (error) {
        console.error("Error retrieving dates for theater:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getMoviesForTheaterOnDate = async (req, res) => {
    try {
        const theaterId = req.params.theaterId;
        const date = req.params.date;
        console.log("Received request for theaterId:", theaterId, "and date:", date);

        console.log("Querying showtimes...");
        const showtimes = await Showtime.find({ theaterId: theaterId, date: date }).populate('movie');

        if (showtimes.length === 0) {
            return res.status(404).json({ error: "No showtimes found for the specified theater and date" });
        }

        // Extract unique movie ids from the showtimes
        const movieIds = [...new Set(showtimes.map(showtime => showtime.movie._id))];

        console.log("Querying movies...");
        const movies = await Movie.find({ _id: { $in: movieIds } });

        // Customize this part based on your data model
        const moviesWithShowtimes = movies.map(movie => {
            const movieShowtimes = showtimes.filter(showtime => showtime.movie._id.equals(movie._id));

            // Customize the movie details based on your model structure
            const movieDetails = {
                _id: movie._id,
                title: movie.title,
                // Add other movie details as needed
            };

            // Customize the showtime details based on your model structure
            const showtimeDetails = movieShowtimes.map(showtime => {
                return {
                    time: showtime.time,
                    // Add other showtime details as needed
                };
            });

            return {
                movie: movieDetails,
                showtimes: showtimeDetails,
            };
        });

        console.log("Movies with showtimes:", moviesWithShowtimes);
        res.json(moviesWithShowtimes);
        console.log("Sending response...");
    } catch (error) {
        console.error("Error retrieving movies and showtimes for theater on date:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};