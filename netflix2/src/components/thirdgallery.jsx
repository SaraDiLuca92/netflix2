import React, { useState, useEffect } from "react";

import MovieList from "./MovieList";

const MoviesTre = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=21c22e4c&s=faith`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="divmovies d-flex p-2">
      <MovieList movies={movies} />{" "}
    </div>
  );
};

export default MoviesTre;
