import { useState } from "react";
import ItemCountPresent from "./ItemCountPresent";

const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("maximo de unidades");
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("minimo de unidades");
    }
  };

  return <ItemCountPresent counter={counter} sumar={sumar} restar={restar} />;
};

export default ItemCountContainer;
