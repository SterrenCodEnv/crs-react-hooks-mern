import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import queryString from "query-string";
import { useMemo } from "react";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchWord: q,
  });
  const { searchWord } = values;
  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchWord}`);
  };

  return (
    <>
      <h1>Search's</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a hero..."
              className="form-control"
              name="searchWord"
              autoComplete="off"
              value={searchWord}
              onChange={handleInputChange}
            ></input>
            <button type="submit" className="btn btn-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && (
            <div
              className="alert alert-info text-center animate__animated animate__bounceIn"
              role="alert"
            >
              Search a hero...
            </div>
          )}

          {q !== "" && heroesFilter.length === 0 && (
            <div
              className="alert alert-danger text-center animate__animated animate__bounceIn"
              role="alert"
            >
              No heroes have been found with the name
              <p className="alert-link">{q}</p>
            </div>
          )}

          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
