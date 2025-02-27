import { Link } from "react-router";
import "./productCard.css";

export const ProductCard = ({ item }) => {
  return (
    <div className="productcard">
      <img style={{ width: "100px" }} src={item.image} alt="" />
      <h3> {item.title} </h3>
      <h3> {item.price} </h3>
      <Link to={`/itemDetail/${item.id}`}>Ver detalle</Link>
    </div>
  );
};
