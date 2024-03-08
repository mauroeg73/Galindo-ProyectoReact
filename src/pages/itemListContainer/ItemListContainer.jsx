import { useEffect, useState } from "react";
import { getProducts } from "../../productsMock";
import { ItemList } from "../../components/common/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp);
      setIsLoading(false);
    });
  }, []);

  return (
    <>{isLoading ? <h2>cargando</h2> : <ItemList products={products} />}</>
  );
};
