import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('GifItem Component Test', () => {
  const title = 'Gif Title';
  const url =
    'https://api.giphy.com/v1/gifs/search?api_key=0kePs8YM92zgFmRSM7xoOpXX8QJ6mUFr&q=puppies&limit=20';

  const component = <GifItem title={title} url={url} />;

  test('Should must match snapshot ', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  test('Should show image with url and alt', () => {
    render(component);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Should show title into component', () => {
    render(component);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
