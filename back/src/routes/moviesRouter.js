const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validationMoviesData = require("../middlewares");

const router = Router();

router.get("/movies", moviesController.getMovies);
router.post("/movies", validationMoviesData, moviesController.createMovie);

module.exports = router;
