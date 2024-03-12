const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-primary" onClick={addOne}>
          sumar
        </button>
        <h2> {counter} </h2>
        <button
          className="btn btn-primary"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          restar
        </button>
        <button className="btn btn-primary" onClick={() => onAdd(counter)}>
          agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
