import React from "react";
import { Movies } from "../../data/Films/index.js";
import MovieFrame from "../MovieFrame/index.jsx";
import "./style.css";

export default function MovieList() {
  const displayMovies = Movies;

  return (
    <>
      <div className="film-list-title">Najlepsze filmy według naszej redakcji</div>
      <div className="film-list">
        {displayMovies.map((movie) => {
          return <MovieFrame movie={movie} />
        })}
      </div>
    </>
  );
}


