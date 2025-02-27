import { Link } from "react-router";
import "./navbar.css";
import { CartIcon } from "../../common/cart/CartIcon";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="home" to="/">
          {" "}
          <img
            className="logo"
            src="https://res.cloudinary.com/dd8fbfpvq/image/upload/v1740353855/imprimideco-logo-alargado_zxkjbf.jpg"
            alt="Logo Imprimideco"
          />
        </Link>
        <ul>
          <Link className="category" to="/category/cuadrosBlancoYNegro">
            cuadros blanco y negro
          </Link>
          <Link className="category" to="/category/cuadrosDePaisajes">
            cuadros de paisajes
          </Link>
          <Link className="category" to="/category/cuadrosInfantiles">
            cuadros infantiles
          </Link>
        </ul>
        <Link to="/cart">
          {" "}
          <CartIcon />{" "}
        </Link>
      </nav>
    </div>
  );
};
