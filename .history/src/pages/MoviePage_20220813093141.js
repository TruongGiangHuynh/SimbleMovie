import React from "react";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
  return (
    <div className="movie p-10">
      <MovieList type="popular"></MovieList>
    </div>
  );
};

export default MoviePage;
