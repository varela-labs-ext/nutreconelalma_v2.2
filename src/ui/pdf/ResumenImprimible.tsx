import React from "react";

const ResumenImprimible = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 print:p-0">
      <h1 className="text-2xl font-bold mb-4">Resumen de Datos</h1>
      {/* Agrega aquí los datos a mostrar */}
      <div className="my-4">
        <p>Nombre del Proyecto: React Calculadora App</p>
        <p>Usuario actual: [usuario]</p>
        {/* Más campos aquí */}
      </div>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handlePrint}
      >
        Imprimir PDF
      </button>
    </div>
  );
};

export default ResumenImprimible;
