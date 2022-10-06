import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { getTrendingFilms } from 'services/theMoviedbApi';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(res => {
      setFilms(res);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.length > 0 &&
          films.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          ))}
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HomePage;
