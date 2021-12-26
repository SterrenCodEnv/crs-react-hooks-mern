import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../base/09-promises';
import heroes from '../../data/heroes';

describe('Test in 08-imp-exp.js', () => {

    test('getHeroeByIdAsync function return a async heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toBe(heroes[id-1]);
            done();
        })
    });
});