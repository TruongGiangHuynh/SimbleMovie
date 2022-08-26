import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
import useDebound from "../hooks/useDebound";

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
const pageCount = 5;
const MoviePage = () => {
  const [filters, setFilters] = useState();
  const filterDebounce = useDebound(filters, 500);
  const [nextPage, setNextPage] = useState(1);
  const handleFilterChange = (e) => {
    setFilters(e.target.value);
  };
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=3725920225e7244f7eaaf773ba327f56&page=${nextPage}`
  );
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=3725920225e7244f7eaaf773ba327f56&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=3725920225e7244f7eaaf773ba327f56&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const { data, error } = useSWR(url, fetcher);
  if (!data) return null;
  const movies = data?.results || [];
  const loading = !data && !error;
  const { page, total_pages } = data;

  return (
    <div className="p-10 movie">
      <div className="flex mb-5">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Type here to search "
            className="w-full p-4 text-white outline-none bg-slate-800"
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
      {loading && (
        <div className="w-10 h-10 mx-auto mb-5 border-4 border-t-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}

      <div className="grid grid-cols-4 gap-10 ">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="flex justify-center gap-5 mt-10 ietms-center">
        <span
          className="text-white cursor-pointer"
          onClick={() => setNextPage(nextPage - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
        {new Array(pageCount).fill(0).map((item, index) => (
          <span
            className="px-4 py-2 leading-none bg-white rounded-lg cursor-pointer text-slate-900"
            onClick={() => setNextPage(index)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className="text-white cursor-pointer"
          onClick={() => setNextPage(nextPage + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
