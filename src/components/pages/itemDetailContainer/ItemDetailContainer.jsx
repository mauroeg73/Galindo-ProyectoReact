import { useEffect, useState } from "react";
import { getProduct } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import CircularIndeterminate from "../../common/cargando";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    console.log(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        CircularIndeterminate()
      ) : (
        <ItemDetail item={item} onAdd={onAdd} />
      )}
    </>
  );
};
