import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const MovieList = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>{" "}
          <Button onClick={() => navigate("componentdetails")} variant="danger">
            INFO
          </Button>{" "}
        </div>
      ))}
    </>
  );
};

export default MovieList;
