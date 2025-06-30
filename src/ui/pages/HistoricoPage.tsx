import { useEffect, useState } from "react";
import localforage from "localforage";

const HistoricoPage = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    localforage.keys().then(setKeys);
  }, []);

  const handleLoad = async (key: string) => {
    const value = await localforage.getItem(key);
    setData(value);
  };

  const handleDelete = async (key: string) => {
    await localforage.removeItem(key);
    setKeys(await localforage.keys());
    setData(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Histórico</h2>
      <select onChange={(e) => handleLoad(e.target.value)} className="border p-2 mr-2">
        <option>Seleccionar clave</option>
        {keys.map((k) => (
          <option key={k} value={k}>{k}</option>
        ))}
      </select>
      <button onClick={() => handleDelete(data?.id)} className="bg-red-500 text-white px-2 py-1 rounded">
        Eliminar Seleccionado
      </button>

      {data && (
        <pre className="mt-4 bg-gray-100 p-4 rounded text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default HistoricoPage;
