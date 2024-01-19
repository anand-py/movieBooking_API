const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    theaterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }, // Assuming time is a string, adjust as needed
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;
