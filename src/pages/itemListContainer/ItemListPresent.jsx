import { ProductCard } from "../../components/common/ProductCard";

const ItemListPresent = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default ItemListPresent;
