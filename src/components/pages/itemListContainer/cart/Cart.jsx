import { Link } from "react-router";

export const Cart = () => {
  return (
    <div>
      <h2>Este es el carrito</h2>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
