import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Test in 02-template-string.js', () => {

    test('getSaludo function should return a greeting', () => {
        const name = 'Juan';
        const greeting = getSaludo(name);

        expect(greeting).toBe('Hello ' + name + '!');
    });
    

    test('getSaludo fuction should return Hello Anonymous', () => {
        const greeting = getSaludo();
        expect(greeting).toBe('Hello Anonymous!');
    });
});