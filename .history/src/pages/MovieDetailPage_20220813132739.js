import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
const MovieDetailPage = () => {
  const { movieid } = useParams();

  return <div>Movie detail page</div>;
};

export default MovieDetailPage;
