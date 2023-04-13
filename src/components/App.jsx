import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './style.module.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <p>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
        </p>
        <p>
          <NavLink to="movies">Movies</NavLink>
        </p>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </div>
  );
};
