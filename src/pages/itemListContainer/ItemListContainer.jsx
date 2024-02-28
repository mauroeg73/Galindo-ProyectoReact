import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import ItemListPresent from "./ItemListPresent";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemListPresent items={items} />;
};

export default ItemListContainer;
