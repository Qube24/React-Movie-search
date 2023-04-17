import { fetchCast } from 'components/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './castStyle.module.css';

const Cast = () => {
  const { id } = useParams();
  const [actor, setCast] = useState(null);

  const showCast = async id => {
    const myCast = await fetchCast(id);
    const actor = myCast.cast;
    setCast(actor);
    console.log(actor);
  };

  useEffect(() => {
    showCast(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (!actor) {
    return 'Loading';
  }

  return (
    <div>
      <ul className={css.listCast}>
        <div className={css.listBox}>
          {actor.map(el => (
            <li key={el.id} className={css.card}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : 'https://placehold.co/200x305'
                }
                alt={el.name}
                className={css.picture}
              />
              <p className={css.text}>Actor: {el.name}</p>
              <p className={css.text}>Role: {el.character}</p>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Cast;
