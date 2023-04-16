import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { fetchMovies } from 'components/fetchApi';

function Home() {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const fetchTrending = await fetchMovies();
    setTrending(fetchTrending.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <ul>
        {trending.map(el => (
          <Link to={`/movies/${el.id}`} key={el.id}>
            <li key={el.id}>{el.title}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Home;
