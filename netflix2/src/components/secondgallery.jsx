import React, { useState, useEffect } from "react";

import MovieList from "./MovieList";

const MoviesDue = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

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

export default MoviesDue;
