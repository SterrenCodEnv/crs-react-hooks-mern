import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ searchText });
    navigate(`?q=${searchText}`);
  };

  const searchWord = searchParams.get('q') || '';
  const heroes = getHeroesByName(searchWord);

  const showSearch = searchWord.length === 0;
  const showError = searchWord.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: searchParams.get('q') || '',
  });
  return (
    <>
      <h2>Search</h2>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-success opacity-75 mt-3">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{searchWord}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
