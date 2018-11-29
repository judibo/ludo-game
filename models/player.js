const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('Player', playerSchema);