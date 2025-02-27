import { useEffect, useState } from "react";
import { products } from "https://fakestoreapi.com/products?limit=9";
import { useParams } from "react-router";

export const ItemDetail = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let producto = products.find((elm) => elm.id === id);
    setDetail(producto);
  }, [id]);

  return (
    <div>
      <h2>{detail.title}</h2>
    </div>
  );
};
