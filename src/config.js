export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "e88c22fe317cce5ec41675bd57d6efee";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
    //https://api.themoviedb.org/3/movie/now_playing?api_key=e88c22fe317cce5ec41675bd57d6efee
    getMovieList: (type, page = 1) =>
        `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) =>
        `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
    ImageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    Image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
    getMovieSearch: (query, page) =>
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
};
