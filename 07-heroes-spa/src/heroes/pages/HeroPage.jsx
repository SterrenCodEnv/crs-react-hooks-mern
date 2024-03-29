import { useMemo } from 'react';
import { getHeroesById } from '../helpers/getHeroesById';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

export const HeroPage = () => {
  let { id } = useParams();
  const hero = useMemo(() => getHeroesById(id), [id]);
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-4">
        <img
          src={heroImageUrl}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <b>Alter ego:</b> {hero.alter_ego}{' '}
          </li>
          <li className="list-group-item">
            {' '}
            <b>Publisher:</b> {hero.publisher}{' '}
          </li>
          <li className="list-group-item">
            {' '}
            <b>First appearance:</b> {hero.first_appearance}{' '}
          </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button onClick={onNavigateBack} className="btn btn-outline-primary">
          Regresar
        </button>
      </div>
    </div>
  );
};
