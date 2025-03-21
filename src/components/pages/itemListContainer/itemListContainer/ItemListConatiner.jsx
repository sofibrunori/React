import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../../../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./itemListContainer.css";
import { ProductCard } from "../../../common/productCard/ProductCard";
import CircularIndeterminate from "../../../common/loading/Loading";

export const ItemListConatiner = () => {
  const { items, setItems } = useState([]);
  const { loading, setLoading } = useState(true);
  const { name } = useParams();

  useEffect(() => {
    let refCollection = collection(database, "products");
    let consulta = refCollection;
    if (name) {
      consulta = query(refCollection, where("category", "==", name));
    }
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(consulta);
        const arrayProductos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(arrayProductos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [name, setItems, setLoading]);

  if (loading) {
    return (
      <div>
        <CircularIndeterminate />
      </div>
    );
  }

  if (!items || items.length === 0) {
    return <div>No hay productos disponibles</div>;
  }

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
