// src/models/movie.models.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  theaterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater' }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);