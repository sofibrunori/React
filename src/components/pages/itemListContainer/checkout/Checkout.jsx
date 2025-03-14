import "./checkout.css";

import { useState } from "react";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const funcionFormulario = (evento) => {
    evento.preventDefault();
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form className="form" onSubmit={funcionFormulario}>
        <input
          className="input"
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={funcionInputs}
        />
        <input
          className="input"
          type="text"
          placeholder="email"
          name="email"
          onChange={funcionInputs}
        />
        <input
          className="input"
          type="text"
          placeholder="telefono"
          name="telefono"
          onChange={funcionInputs}
        />
        <button className="button">Enviar</button>
        <button className="button" type="button">
          cancelar
        </button>
      </form>
    </div>
  );
};
