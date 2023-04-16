import css from '../../style.module.css';
import { details } from 'components/fetchApi';
import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovie] = useState({});

  useEffect(() => {
    showMovie(id);
  }, []);

  const showMovie = async id => {
    const movie = await details(id);
    setMovie(movie);
  };

  const userScore = Math.ceil(movies.vote_average * 10);

  const genre = movies.genres;

  if (!movies.genres) {
    return 'Loading';
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.original_title}
        width="300"
      />
      <div>
        <p className={css.title}>{movies.title}</p>
        <p className={css.score}>{userScore}%</p>
        <p className={css.mainText}>Overview</p>
        <p className={css.overview}>{movies.overview}</p>
        <p className={css.mainText}>Genres</p>
        <p className={css.genres}>{genre.map(el => `${el.name} `)}</p>
      </div>
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
