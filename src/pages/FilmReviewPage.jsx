import React from "react";
import Footer from "../components/Footer/index.jsx";
import Header from "../components/Header/index.jsx";
import MovieList from "../components/MovieList/index.jsx";

export default function FilmReviewPage() {

  return (
    <div style={{ height: "100%"}}>
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}