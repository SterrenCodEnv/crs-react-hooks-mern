import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from '../components/HeroCard';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(
    () =>
      getHeroesByPublisher(publisher).sort((a, b) =>
        a.superhero.localeCompare(b.superhero)
      ),
    [publisher]
  );
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
