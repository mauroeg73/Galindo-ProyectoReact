import { useState } from "react";

export const ItemCount = ({ stock, inicial = 1 }) => {
  const [counter, setCounter] = useState(inicial);

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

  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>restar</button>
      <button>agregar al carrito</button>
    </div>
  );
};
