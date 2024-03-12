import { useEffect, useState } from "react";
import { getProduct } from "../../../productsMock";
import { ItemDetail } from "./itemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import CircularIndeterminate from "../common/cargando";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>{isLoading ? CircularIndeterminate() : <ItemDetail item={item} />}</>
  );
};
