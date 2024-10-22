const moviesService = require("../services/moviesService");

const moviesController = {
    getMovies: async (req, res) => {

        res.status(200).json(moviesService.getMovies());
    }
}

module.exports = moviesController;