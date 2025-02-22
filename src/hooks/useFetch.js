import { useEffect, useState } from "react";

export const useFetch = (url, valorInicial = []) => {
  const [backend, setBackend] = useState(valorInicial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    const getBackend = fetch(url);
    setTimeout(() => {
      getBackend
        .then((res) => res.json())
        .then((res) => setBackend(res))
        .catch(() => setError({ message: "404 Not Found" }))
        .finally(() => setLoading(false));
    }, 3000);
  }, [url]);

  return { backend, loading, error };
};
