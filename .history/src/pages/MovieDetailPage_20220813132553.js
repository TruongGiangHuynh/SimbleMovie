import React from "react";
import { useParams } from "react-router-dom";
const MovieDetailPage = () => {
  const { movieid } = useParams();

  return <div>Movie detail page</div>;
};

export default MovieDetailPage;
