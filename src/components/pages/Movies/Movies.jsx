import { useEffect, useState } from 'react';
import { Outlet, useSearchParams, Link } from 'react-router-dom';
import { searchMovies } from 'components/fetchApi';
import css from './moviesStyle.module.css';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState(null);

  const search = searchParams.get('value') ?? '';

  useEffect(() => {
    const fetch = async () => {
      const fetchMovie = await searchMovies(search);
      setSearchMovie(fetchMovie.results);
    };
    fetch();
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ value: form.elements.searchInput.value });
    form.reset();
  };

  if (!searchMovie) {
    return 'Loading';
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="searchInput"
          className={css.searchBar}
          placeholder="What are you looking for?"
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
      <ul className={css.listSearch}>
        {searchMovie.map(el => (
          <Link to={`/movies/${el.id}`} key={el.id} className={css.linkSearch}>
            <li key={el.id}>{el.title}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Movies;
