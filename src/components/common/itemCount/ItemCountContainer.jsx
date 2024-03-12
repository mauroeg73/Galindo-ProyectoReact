import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("stock maximo");
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("ingrese al menos un producto");
    }
  };

  return (
    <ItemCount
      counter={counter}
      addOne={addOne}
      subOne={subOne}
      onAdd={onAdd}
    />
  );
};

export default ItemCountContainer;
