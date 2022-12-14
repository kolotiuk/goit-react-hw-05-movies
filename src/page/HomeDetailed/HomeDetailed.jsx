import { useEffect, useState, lazy } from 'react';
import { getMovieDetails } from 'services/theMoviedbApi';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const ButtonBack = lazy(() => import('../../components/ButtonBack/ButtonBack'));

const HomeDetailed = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/';
  const { homeId } = useParams();
  const [oneFilm, setOneFilm] = useState(null);

  useEffect(() => {
    getMovieDetails(Number(homeId)).then(setOneFilm);
  }, [homeId]);

  if (!oneFilm) {
    return null;
  }

  const { original_title, name, poster_path, vote_average, overview, genres } =
    oneFilm;

  return (
    <div>
      <ButtonBack onClick={() => navigate(backLinkHref)} />
      <p>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}` || null}
          alt="alt"
          width="300"
        />
      </p>
      <h1>{original_title || name}</h1>
      <p>User Score: {vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres.map(({ name }) => name).join(' ') || 'Genres not found'}</p>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`cast`} state={{ from: location?.state.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: location?.state.from }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeDetailed;
