const mongoose = require("mongoose");

const movieObject = {
    title: {
        type: String,
        require: true,
        unique: true
    },
    year: {
        type: Number,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    },
    genre: [String],
    rate: {
        type: Number,
        require: true
    },
    poster: {
        type: String,
        require: true,
        unique: true
    }
}

const movieSchema = new mongoose.Schema(movieObject);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;