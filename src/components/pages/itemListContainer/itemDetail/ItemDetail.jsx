import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { database } from "../../../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let refCollection = collection(database, "products");
    let refDoc = doc(refCollection, id);

    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>{item.title}</h2>
    </div>
  );
};

/*import { useEffect, useState } from "react";
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
};*/
