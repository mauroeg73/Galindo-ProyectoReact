export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {price}
        </a>
      </div>
    </div>
  );
};
