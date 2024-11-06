const moviesService = require("../services/moviesService");

const moviesController = {
    getMovies: async (req, res) => {
        try {
            const respuesta = await moviesService.getMovies();
            res.status(200).json(respuesta);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createMovie: async (req, res) => {
        try {
            const respuesta = await moviesService.createMovie(req.body);
            res.status(201).json(respuesta);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = moviesController;
