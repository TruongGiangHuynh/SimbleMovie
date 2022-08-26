export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apikey = "3725920225e7244f7eaaf773ba327f56";
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;
const tmdbEndpointSearch = `https://api.themoviedb.org/3/search/movie`;
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apikey}&page=${page}`,
  getMovieDetail: (movieid) => `${tmdbEndpoint}/${movieid}?api_key=${apikey}`,
  getMovieMeta: (movieid, type) =>
    `${tmdbEndpoint}/${movieid}/${type}?api_key=${apikey}`,
  getMovieSearch: (query, page) =>
    `${tmdbEndpointSearch}?api_key=${apikey}&query=${query}&page=${page}`,
  imgOriginal: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  imgW500: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
};
