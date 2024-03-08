export const Item = ({ title, img, description }) => {
  return (
    <div className="card">
      <h5 className="card-header">{img}</h5>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          detalles
        </a>
      </div>
    </div>
  );
};
