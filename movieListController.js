// let movies=[];
// let id = 0;
const createError = require("http-errors");
const movieDB = require("./Schemas/Movie");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieDB.find();
    res.send(movies);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.createMovie = async (req, res) => {
  try {
    const { title, watched, director, year } = req.body;
    const newMovie = await movieDB.create({
      title,
      watched: Boolean(watched),
      director,
      year,
    });
    res.send(newMovie);
  } catch (error) {
    next(createError(500, error.message));
  }
};

//     const movie = req.body;
//     movie.id = id;
//     //push the new movie into the movies array
//     movies.push(movie);
//     id++;
//     //send back the updated array to user
//     res.send(movies);
// }

exports.getMovieById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const movie = await movieDB.findById(id);
    if (!movie) {
      return next(createError(404, "No movie with that id"));
    }
    res.send(movie);
  } catch (error) {
    next(createError(500, error.message));
  }
};
/*
    
    const movie = movies.find(movie => movie.id == parseInt(id))
    if (movie) {
        res.send(movie)
    } else {
        next(createError(404, "Movie not found"));
    }
        */

exports.deleteMovie = (req, res) => {
  const id = req.params.id;
  //make it so the array filters out the object
  //that has the id which matches theone in our params
  movies = movies.filter((movie) => movie.id != parseFloat(id));
  res.send(movies);
};

exports.updateMovie = (req, res) => {
  const { title, watched, director, year } = req.body;
  const id = req.params.id;

  const movie = movies.find((movie) => movie.id == parseInt(id));

  if (!movie) {
    return res.send("movie not found");
  } else {
    movies = movies.map((movie) => {
      if (movie.id == parseInt(id)) {
        return {
          ...movie,
          title: title || movie.title,
          director: director || movie.director,
          year: year || movie.year,
          watched: watched || movie.watched,
        };
      }
      return movie;
    });
  }
  res.send(movies);
};
