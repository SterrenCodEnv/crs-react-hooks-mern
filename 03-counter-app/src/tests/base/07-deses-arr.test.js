import '@testing-library/jest-dom'
import { returnArray } from '../../base/07-deses-arr';

describe('Test in 07-deses-arr.js', () => {

    test('returnArray function return a string and number', () => {
         const[letters, number] = returnArray();

         expect(letters).toBe('ABC');
         expect(typeof letters).toBe('string');

         expect(number).toBe(123);
         expect(typeof number).toBe('number');
         
    });
});