import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
const MoviePage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/      <MovieList type="popular"></MovieList>
    ?api_key=3725920225e7244f7eaaf773ba327f56`,
    fetcher
  );

  const movies = data?.results || [];
  return <div className="movie p-10"></div>;
};

export default MoviePage;
