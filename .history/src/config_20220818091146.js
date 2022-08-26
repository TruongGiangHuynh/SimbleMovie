export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apikey = "3725920225e7244f7eaaf773ba327f56";
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apikey}`,
  getMovieDetail: (movieid) => `${tmdbEndpoint}/${movieid}?api_key=${apikey}`,
  getMovieMeta: (movieid, type) =>
    `${tmdbEndpoint}/${movieid}/${type}?api_key=${apikey}`,
    imgOriginal:(path)=>`https://image.tmdb.org/t/p/original/${path}`,
    imgW500:(path)=>`https://image.tmdb.org/t/p/w500/${path}`,

};
