import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs hook test', () => {
  test('Should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Test'));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test('Should return images and isLoading false', async () => {
    const { result } = renderHook(() => useFetchGifs('Test'));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 2000,
      }
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
  });
});
