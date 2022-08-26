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
  //   console.log(data);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <>
      <div className="w-full h-[600px] relative ">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] z-10 relative pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-white text-center font-bold text-3xl mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex justify-center items-center gap-5 mb-10">
          {genres.map((item) => (
            <span
              key={item.id}
              className="text-primary py-2 px-4  border border-primary  rounded-lg "
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-white text-base leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
    </>
  );
};
function MovieCredits() {
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
  const { movieid } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${apikey}`,
    fetcher
  );
  console.log(data);
  const { cast } = data;
  if (!data) return null;
  if (!cast || cast.length < 0) return null;
  return (
    <>
      <h2 className="text-center text-white text-2xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              className="w-full h-[350px] object-cover rounded-lg "
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieDetailPage;
