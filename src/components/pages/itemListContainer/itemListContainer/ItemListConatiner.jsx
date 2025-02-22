/*import "./itemListContainer";*/
/*import { useState } from "react";
import { useEffect } from "react";

export const ItemListConatiner = () => {
  const [usuarios, setUsuarios] = useState({});

  useEffect(() => {
    const getUsuarios = fetch("https://jsonplaceholder.typicode.com/users");
    getUsuarios
      .then((res) => res.json())
      .then((res) => setUsuarios(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {usuarios.map((usuario) => {
        return (
          <div key={usuario.id}>
            <h2>{usuario.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
*/

import { useFetch } from "../../../../hooks/useFetch";

export const ItemListConatiner = () => {
  const {
    backend: usuarios,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {loading ? (
        "is loading"
      ) : (
        <div>
          {usuarios.map((usuario) => {
            return (
              <div key={usuario.id}>
                <h2>{usuario.name}</h2>
              </div>
            );
          })}
        </div>
      )}
      {error && <h2>{error.message}</h2>}
    </div>
  );
};
