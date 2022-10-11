import React from 'react';
import SearchBox from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import MoviesSearch from 'components/MoviesSearch/MoviesSearch';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterMovies = searchParams.get('filter') ?? '';

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  return (
    <main>
      <SearchBox onChange={changeFilter} />
      <MoviesSearch query={filterMovies} />
    </main>
  );
};

export default Movies;
