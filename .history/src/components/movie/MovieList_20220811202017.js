import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { useEffect } from "react";

//
//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
// api key
//3725920225e7244f7eaaf773ba327f56
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Profile() {
  const { data, error } = useSWR("/api/user/123", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <div>hello {data.name}!</div>;
}
const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=3725920225e7244f7eaaf773ba327f56",
    fetcher
  );
  useEffect(() => {
    setMovie(data.results);
  }, []);

  console.log(movie);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
