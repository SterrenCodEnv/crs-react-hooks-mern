import { HeroList } from '../components/HeroList';

export const DcPage = () => {
  return (
    <div className=" animate__animated animate__fadeIn">
      <h2>DC Page</h2>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </div>
  );
};
