import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  if (name === "") return [];

  console.log(name);

  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
