import React from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/theMoviedbApi';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import MoviesSearch from 'components/MoviesSearch/MoviesSearch';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const filterMovies = searchParams.get('filter') ?? '';

  const changeSearch = q => {
    setQuery(q);
  };

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <main>
      <SearchBox changeSearch={changeSearch} onChange={changeFilter} />
      <MoviesSearch query={query} />
    </main>
  );
};

export default Movies;
