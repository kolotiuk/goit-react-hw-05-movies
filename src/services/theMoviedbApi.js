import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '886a5e80a67d15e1eb52e12b03d8c581';

const getTrendingFilms = () => {
  return axios.get(`/trending/movie/day?api_key=${API_KEY}`).then(({ data }) => {
    return data.results;
  });
};

const getSearchMovies = q => {
  return axios
    .get(`/search/movie?api_key=${API_KEY}&query=${q}`)
    .then(({ data }) => {
      return data.results;
    });
};

const getMovieDetails = id => {
  return axios.get(`/movie/${id}?api_key=${API_KEY}`).then(({ data }) => {
    return data;
  });
};

const getMovieCredits = id => {
  return axios
    .get(`/movie/${id}/credits?api_key=${API_KEY}`)
    .then(({ data }) => {
      return data.cast;
    });
};

const getMovieReviews = id => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${API_KEY}`)
    .then(({ data }) => {
      return data.results;
    });
};

export {
  getTrendingFilms,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  getSearchMovies,
};
