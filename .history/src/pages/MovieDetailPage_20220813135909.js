import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apikey } from "../config";
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailPage = () => {
  const { movieid } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=${apikey}`,
    fetcher
  );
  console.log("data: ", data);
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(https://api.themoviedb.org/3/movie/{movie_id}?api_key=${data.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetailPage;
