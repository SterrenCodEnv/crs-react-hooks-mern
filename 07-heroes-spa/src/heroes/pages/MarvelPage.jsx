import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
  return (
    <div className=" animate__animated animate__fadeIn">
      <h2>Marvel Page</h2>
      <hr />
      <HeroList publisher={'Marvel Comics'} />
    </div>
  );
};
