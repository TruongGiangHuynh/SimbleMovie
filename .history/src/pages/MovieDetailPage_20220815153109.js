import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
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
      <MovieVideo></MovieVideo>
      <MovieSimilar></MovieSimilar>
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

  if (!data) return null;
  const { cast } = data;

  if (!cast || cast.length < 0) return null;
  return (
    <>
      <h2 className="text-center text-white text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5 mx-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              alt=""
            />
            <h3 className="text-white font-medium text-xl">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
function MovieVideo() {
  //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=
  const { movieid } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${apikey}`,
    fetcher
  );

  if (!data) return null;

  const { results } = data;

  if (!results || results.length < 0) return null;
  return (
    <div className="py-10 mx-5">
      <div className="flex flex-col gap-5">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <div className="text-center">
              <h3 className="text-white font-bold text-center text-2xl p-3 bg-primary inline-block mb-5">
                {item.name}
              </h3>
            </div>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                width="727"
                height="409"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function MovieSimilar() {
  //https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=
  const { movieid } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=${apikey}`,
    fetcher
  );

  if (!data) return null;
  console.log(data);
  const { results } = data;

  if (!results || results.length < 0) return null;
  return (
    <div className="py-10 ">
      <h2 className="text-white text-3xl font-bold text-center mb-5">
        Similar movies
      </h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
export default MovieDetailPage;
