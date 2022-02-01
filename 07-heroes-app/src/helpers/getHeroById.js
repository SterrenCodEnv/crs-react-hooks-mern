import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  console.log("getHeroById function is called");
  return heroes.find((hero) => hero.id === id);
};
