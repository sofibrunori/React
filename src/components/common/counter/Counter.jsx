import { useState } from "react";

export const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (item.rating.count > contador) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    console.log("agregando...");
  };

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};
