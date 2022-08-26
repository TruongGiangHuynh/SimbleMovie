export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apikey = "3725920225e7244f7eaaf773ba327f56";
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apikey}`,
  getMovieDetail: (movieId) =>
    `${tmdbEndpoint}/movie/${movieId}?api_key=${apikey}`,
};
