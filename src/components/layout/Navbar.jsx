import { Link } from "react-router-dom";
import CartWidget from "../common/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Locotes Indumentaria
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/remeras">
                Remeras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/accesorios">
                Accesorios
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Contacto</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
