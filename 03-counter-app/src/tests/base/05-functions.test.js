import '@testing-library/jest-dom'
import { getUser, getActiveUser } from '../../base/05-functions';

describe('Test in 05-functions.js', () => {

    test('getUser function return a object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'Klezers'
        }
        const user = getUser()
        expect(user).toEqual(userTest);
    })

    test('getActiveUser function return a object - with parameter', () => {
        const name = 'Klezers';
        const user = getActiveUser(name)
        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    }) 
});