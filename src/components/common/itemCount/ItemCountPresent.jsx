const ItemCountPresent = ({ counter, sumar, restar }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>restar</button>
      <button>agregar al carrito</button>
    </div>
  );
};

export default ItemCountPresent;
