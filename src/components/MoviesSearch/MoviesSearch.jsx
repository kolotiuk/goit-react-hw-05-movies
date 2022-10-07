import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSearchMovies } from 'services/theMoviedbApi';

const MoviesSearch = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
  }, []);

  useEffect(() => {
    getSearchMovies(query)
      .then(movie => setMovies(movie))
      .catch(err => setError(err));
  }, [query]);

  return (
    <ul>
      {movies.length > 0 &&
        movies.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesSearch;
