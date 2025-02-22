import { CartIcon } from "../../common/cart/CartIcon";
import { Link } from "react-router";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">IMPRIMIDECO</Link>
        <ul>
          <li>Cuadros blanco y negro</li>
          <li>Cuadros infantiles</li>
          <li>Cuadros de paisajes</li>
        </ul>
        <Link to="/cart">
          {" "}
          <CartIcon />{" "}
        </Link>
      </nav>
    </div>
  );
};
