const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, auto: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    theater: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Showtime', showtimeSchema);