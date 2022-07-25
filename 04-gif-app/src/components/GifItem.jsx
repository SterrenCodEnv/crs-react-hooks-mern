export const GifItem = ({ title, url, id }) => {
  return (
    <>
      <div className="card">
        <img id={id} src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};
