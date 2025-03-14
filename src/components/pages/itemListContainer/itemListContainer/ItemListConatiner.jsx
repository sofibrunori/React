import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./itemListContainer.css";
import { ProductCard } from "../../../common/productCard/ProductCard";

export const ItemListConatiner = () => {
  const { items, setItems } = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(database, "products");
    let consulta = refCollection;
    if (name) {
      consulta = query(refCollection, where("category", "==", name));
    }
    const getProducts = getDocs(consulta);
    getProducts
      .then((res) => {
        const arrayProductos = res.docs.map((elm) => {
          return { id: elm.id, ...elm.data() };
        });
        setItems(arrayProductos);
      })
      .catch((error) => console.log(error));
  }, [name]);

  console.log(items);

  return (
    <section className="products">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

/*import { useFetch } from "../../../../hooks/useFetch";
import CircularIndeterminate from "../../../common/loading/Loading";
import { ProductCard } from "../../../common/productCard/ProductCard";
import "./itemListContainer.css";

export const ItemListConatiner = () => {
  const {
    backend: items,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products?limit=9");

  return (
    <div>
      {loading ? (
        <CircularIndeterminate />
      ) : (
        <section>
          <div className="products">
            {items.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </section>
      )}
      {error && <h2>{error.message}</h2>}
    </div>
  );
};*/
