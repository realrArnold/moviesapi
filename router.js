const express = require("express")
const router = express.Router();
const movies = require("./movieListController")

router.get ("/movies",movies.getAllMovies);
router.post("/movies/create", movies.createMovie);
router.get("/movies/:id", movies.getMovieById);
router.delete("/movies/:id", movies.deleteMovie)
router.put("/movies/:id", movies.updateMovie);


module.exports = router;