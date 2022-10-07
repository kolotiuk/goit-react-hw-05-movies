import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/theMoviedbApi';

const Cast = () => {
  const [oneFilm, setOneFilm] = useState(null);
  const { homeId } = useParams();

  useEffect(() => {
    getMovieCredits(homeId).then(setOneFilm);
  }, [homeId]);

  if (!oneFilm) {
    return null;
  }

  return (
    <div>
      <ul>
        {oneFilm.length > 0 &&
          oneFilm.map(({ id, profile_path, character, original_name }) => (
            <li key={id}>
              <p>
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}` || null}
                  alt=""
                />
              </p>
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
