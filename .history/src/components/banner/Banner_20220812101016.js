import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";

const Banner = ({ type = "now_playing" }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=3725920225e7244f7eaaf773ba327f56`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="baner h-[500px] page-container mb-20">
      <Swiper>
        <SwiperSlide>
          {" "}
          <BannerItem></BannerItem>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
function BannerItem() {
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src="https://cdnimg.vietnamplus.vn/t1200/Uploaded/Mtpyelagtpy/2019_04_29/avengersendgame2904.jpg"
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">Avenger Endgame</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-lg ">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-lg ">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-lg ">
            Adventure
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default Banner;
