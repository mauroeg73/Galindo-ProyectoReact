export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <img src={img} width={"175px"} alt="" />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};
