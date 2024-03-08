import { useState } from "react";
import { ItemDetail } from "../components/common/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  return <>{item && <ItemDetail {...item} />}</>;
};

// import { ProductCard } from "../../components/common/ProductCard";

// const ItemListPresent = ({ products }) => {
//   return (
//     <div>
//       {products.map((product) => {
//         return (
//           <ProductCard
//             key={product.id}
//             img={product.img}
//             title={product.title}
//             description={product.description}
//             price={product.price}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default ItemListPresent;
