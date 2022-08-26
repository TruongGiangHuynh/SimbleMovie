import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard, { LoandingCart } from "./MovieCard";
import useSWR from "swr";
import { tmdbAPI, fetcher } from "../../config";

const MovieList = ({ type = "now_playing" }) => {
  // const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  // useEffect(() => {
  //   if (data && data.results) {
  //     setMovies(data.results);
  //   }
  // }, [data]);
  const loading = !data && !error;
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      {!loading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <LoandingCart></LoandingCart>
              <LoandingCart></LoandingCart>
              <LoandingCart></LoandingCart>
              <LoandingCart></LoandingCart>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
