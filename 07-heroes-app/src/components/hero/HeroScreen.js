import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHeroById';
// import batman from '../../assets/images/dc-batman.jpg'; -> Import static image
const heroImages = require.context('../../assets/images', true);

export const HeroScreen = () => {
  const { id: heroId } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  !hero && <Navigate to='/' />;

  const { id, alter_ego, superhero, characters, first_appearance, publisher } =
    hero;

  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__flipInY'>
        <img
          src={heroImages(`./${id}.jpg`)}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b>
            {first_appearance}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Close
        </button>
      </div>
    </div>
  );
};
