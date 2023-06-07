import React from "react";
import "./style.css";

export default function MovieFrame({ movie }) {

  return (
    <div className="movie-frame">
      <div className="movie-frame__title">
        {movie.name}
      </div>
      <div>
        <img className="movie-frame__image" src={`src/assets/${movie.image}`} />
      </div>
      <div className="movie-frame__description">
        {movie.description}
      </div>
      <div className="movie-frame__details">
        <div className="movie-frame__details__length">
          {movie.length}: min
        </div>
        <div className="movie-frame__details__rating">
          średnia ocen: {movie.rating}
        </div>
      </div>
    </div>
  );
}