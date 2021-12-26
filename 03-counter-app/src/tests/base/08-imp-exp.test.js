import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Test in 08-imp-exp.js', () => {

    test('getHeroeById function return a heroe by id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find((h) => h.id === id)
        expect(heroe).toEqual(heroeData);
         
    });

    test('getHeroeById function return a undefined by not existent id', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
         
    });

    test('getHeroesByOwner function return a array with DC heroes', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        const heroesData = heroes.filter((h) => h.owner === owner);
        expect(heroes).toEqual(heroesData)
    });

    test('getHeroesByOwner function return array length of DC heroes', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
    });
});