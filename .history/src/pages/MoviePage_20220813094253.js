import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
const MoviePage = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=3725920225e7244f7eaaf773ba327f56`,
    fetcher
  );

  const movies = data?.results || [];
  return (
    <div className="movie p-10">
      <div className="flex mb-5">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search "
            className="p-4 w-full bg-transparent"
          />
        </div>
        <button className="p-4 bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke_width="2"
          >
            <path
              stroke_linecap="round"
              stroke_linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10 ">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
