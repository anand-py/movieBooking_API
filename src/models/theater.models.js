const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
    theaterId: { type: Number , auto: true },
  name: { type: String, required: true },
  city: { type: String, required: true }
}, {timestamps : true});

module.exports = mongoose.model('Theater', theaterSchema);