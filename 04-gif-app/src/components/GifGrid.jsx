import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div key={category}>
        <h2>{`${
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
        }`}</h2>

        {isLoading && <h2>Loading...</h2>}

        <div className="card-grid">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      </div>
    </>
  );
};
