import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid component test', () => {
  const category = 'Test';

  test('Should show loading on startup', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getAllByText(category));
  });

  test('Should show items when useFetchGifts load images', () => {
    const gifs = [
      { id: 'gifId1', url: 'https://api.image.com/1.png', title: 'One' },
      { id: 'gifId2', url: 'https://api.image.com/2.png', title: 'Two' },
      { id: 'gifId3', url: 'https://api.image.com/3.png', title: 'Three' },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img')).toHaveLength(gifs.length);
  });
});
