import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US&page=1'
    );
    const resJSONed = await res.json();
    setMovies(resJSONed.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <ul>
        {movies.map(el => (
          <li>{el.title}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Home;
