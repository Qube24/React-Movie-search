import { fetchCast } from 'components/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  }, []);

  if (!actor) {
    return 'Loading';
  }

  return (
    <div>
      <ul>
        <div>
          {actor.map(el => (
            <li key={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
                alt={el.name}
                width="200"
              />
              {el.name}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Cast;
