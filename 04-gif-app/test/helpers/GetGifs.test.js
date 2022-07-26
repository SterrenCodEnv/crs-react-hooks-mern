import { getGifs } from '../../src/helpers/GetGifs';

describe('GetGifs test helper', () => {
  test('Should return gifs array', async () => {
    const gifs = await getGifs('cats');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
