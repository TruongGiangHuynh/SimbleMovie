import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm text-white opacity-50">
          <span className="">{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button>Watch now2</Button>
        {/* <button */}
          onClick={() => navigate(`/movie/${id}`)}
          className="w-full px-6 py-3 mt-auto text-white capitalize rounded-lg bg-primary"
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
