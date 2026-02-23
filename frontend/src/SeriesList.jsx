import { useState, useEffect } from "react";

function SeriesList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // para demo simples usamos um ficheiro estático colocado em public/series.json
        const res = await fetch("/series.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setData(json);
      } catch (err) {
        if (mounted) setError(err.message || "Erro desconhecido");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="spinner">Carregando…</div>;
  if (error)
    return (
      <div className="alert alert-error">
        Não foi possível carregar os dados: {error}
      </div>
    );
  if (!data) return null;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.titulo}</li>
      ))}
    </ul>
  );
}

export default SeriesList;
