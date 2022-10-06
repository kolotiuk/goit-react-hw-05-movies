import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/theMoviedbApi';

const Reviews = () => {
  const [oneFilm, setOneFilm] = useState(null);
  const { homeId } = useParams();

  useEffect(() => {
    getMovieReviews(homeId).then(setOneFilm);
  }, [homeId]);

  if (!oneFilm) {
    return null;
  }

  console.log(oneFilm);

  return (
    <div>
      <ul>
        {!oneFilm.length ? (
          <div>We dont have any reviews for this movie</div>
        ) : (
          oneFilm.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
