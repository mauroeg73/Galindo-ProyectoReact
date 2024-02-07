import CartWidget from "../common/CartWidget";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <h2>Locotes-logo</h2>
        <li>Indumentaria</li>
        <li>Accesorios</li>
        <li>Contacto</li>
      </ul>
      <h4>Carrito</h4>
      <CartWidget />
    </nav>
  );
};
