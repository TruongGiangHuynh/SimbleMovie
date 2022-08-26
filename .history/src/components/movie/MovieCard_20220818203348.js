import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";
function ErrorFallback() {
  return <p className="text-red-400 bg-red-50 ">Something went wrong:</p>;
}
const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 rounded-lg select-none movie-card bg-slate-800">
      <img
        src={tmdbAPI.imgW500(poster_path2)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm text-white opacity-50">
          <span className="">{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button bgColor="primary" onClick={() => navigate(`/movie/${id}`)}>
          Watch now
        </Button>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.number,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};
export default withErrorBoundary(MovieCard, {
  FallbackComponent: ErrorFallback,
});
