import heroes, {owners} from '../data/heroes';

const getHeroeById = (id) => heroes.find((hero) =>  hero.id === id);

//console.log("Hero by id: ", getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

//console.log("Heroes by Owner: ", getHeroesByOwner(owners[0]));

export {
    getHeroeById,
    getHeroesByOwner
}