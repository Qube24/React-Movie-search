import css from './movieDetalisStyle.module.css';
import { details } from 'components/fetchApi';
import { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovie] = useState({});
  const location = useLocation();

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

  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <div className={css.container}>
      <BackLink to={backLinkHref}>
        <button type="button" className={css.backBtn}>
          Go Back
        </button>
      </BackLink>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
        alt={movies.original_title}
        className={css.poster}
      />
      <div className={css.infoBox}>
        <p className={css.title}>{movies.title}</p>
        <p className={css.score}>User Score: {userScore}%</p>
        <p className={css.mainText}>Overview</p>
        <p className={css.overview}>{movies.overview}</p>
        <p className={css.mainText}>Genres</p>
        <p className={css.genres}>{genre.map(el => `${el.name} `)}</p>
      </div>
      <p className={css.infoText}>Additional information</p>
      <div className={css.linkBox}>
        <Link to="cast" className={css.linkTo}>
          Cast
        </Link>
        <Link to="reviews" className={css.linkTo}>
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
