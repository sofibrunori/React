import { CartIcon } from "../../common/cart/CartIcon";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <h2>IMPRIMIDECO</h2>
        <ul>
          <li>Cuadros blanco y negro</li>
          <li>Cuadros infantiles</li>
          <li>Cuadros de paisajes</li>
        </ul>
        <CartIcon />
      </nav>
    </div>
  );
};
