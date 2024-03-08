import { ItemCount } from "./itemCount/ItemCount";

export const ItemDetail = ({ title, description, img, price, stock }) => {
  return (
    <div className="card mb-3" style="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">{price}</small>
              <ItemCount stock={stock} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
