import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'services/theMoviedbApi';

const MoviesSearch = ({ query }) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      getSearchMovies(query)
        .then(movie => setMovies(movie))
        .catch(err => console.log(err));
    }
  }, [query]);

  return (
    <ul>
      {movies.length > 0 &&
        movies.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MoviesSearch;
