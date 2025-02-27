import { useFetch } from "../../../../hooks/useFetch";
import CircularIndeterminate from "../../../common/cart/loading/Loading";
import { ProductCard } from "../../../common/productCard/ProductCard";
import "./itemListContainer.css";

export const ItemListConatiner = () => {
  const {
    backend: items,
    loading,
    error,
  } = useFetch(
    "https://fakestoreapi.com/products?limit=9" /*"../../../../backend/products"*/
  );

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
};
