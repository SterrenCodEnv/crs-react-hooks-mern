import React from "react";
import { shallow } from "enzyme";
import { getGifs } from "../../helpers/getGifs";

describe('Test in getGifs.js', () => {
    test('get 10 items', async () => {
        const gifs = await getGifs('The Office');
        expect(gifs.length).toBe(10);
    })

    test('send param validate', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
});