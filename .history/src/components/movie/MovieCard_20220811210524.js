import React from "react";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <div className="flex items-center justify-between text-white text-sm opacity-50 mb-10">
          <span className="">{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="py-3 px-6 bg-primary text-white  capitalize w-full rounded-lg">
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
