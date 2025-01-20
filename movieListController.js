let movies=[];
let id = 0;
// const createError = require ("http-errors");

exports.getAllMovies = (req,res) => {
 res.send(movies);
}

exports.createMovie = (req,res,) => {
    // store request body in a varible
    //req body contain movie object
    const movie = req.body;
    movie.id = id;
    //push the new movie into the movies array
    movies.push(movie);
    id++;
    //send back the updated array to user
    res.send(movies);
}

exports.getMovieById = (req,res,next) => {
    const id = req.params.id;
    const movie = movies.find(movie => movie.id == parseInt(id))
    if (movie) {
        res.send(movie)
    } else {
        next(createError(404, "Movie not found"));
    }
}

exports.deleteMovie =(req,res) => {
    const id = req.params.id;
    //make it so the array filters out the object
    //that has the id which matches theone in our params
    movies = movies.filter(movie => movie.id !=parseFloat(id));
    res.send(movies);
}

exports.updateMovie = (req,res) => {
    const {title,completed} = req.body;
    const id = req.params.id;

    const movie = movies.find(movie => movie.id == parseInt(id));

    if(!movie) {
        return res.send("movie not found");
    } else {
        movies = movies.map(movie => {
            if (movie.id == parseInt(id)) {
                return{
                    ...movie,
                    title: title || movie.title,
                    completed: completed || movie.completed
                }
            }
            return movie;
        })
    }
    res.send(movies);
}