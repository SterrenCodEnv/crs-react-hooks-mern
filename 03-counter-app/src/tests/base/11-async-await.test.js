import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await';


describe('Test in 11-async-await.js', () => {

    test('getImagen function return a image url', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});