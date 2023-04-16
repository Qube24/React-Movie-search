import { useEffect, useState } from 'react';
import { Outlet, useSearchParams, Link } from 'react-router-dom';
import { searchMovies } from 'components/fetchApi';

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
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchInput" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchMovie.map(el => (
          <Link to={`/movies/${el.id}`} key={el.id}>
            <li key={el.id}>{el.title}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Movies;
