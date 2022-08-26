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
  if (!data) return null;
  const { backdrop_path } = data;

  return (
    <>
      {data && (
        <div className="w-full h-[600px] relative mb-10">
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div
            className="w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default MovieDetailPage;
