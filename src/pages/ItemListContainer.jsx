// import { ProductCard } from "../components/common/ProductCard";

export const ItemListContainer = ({ greeting }) => {
  return (
    //   <ProductCard titulo={"remeras"} desc={"de algodon"} precio={15000} />
    //   <ProductCard titulo={"mochilas"} desc={"con diseño"} precio={20000} />
    //   <ProductCard titulo={"gorras"} desc={"trucker"} precio={7000} />
    <div>
      <h2>{greeting}</h2>
      <h2>Productos</h2>
      <button onClick={""}>agregar al carrito</button>
    </div>
  );
};
