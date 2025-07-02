import MateriaPrimaModel from "@/logic/models/materiaPrima/MateriaPrimaModel";
import { useEffect, useState } from "react";
import MateriaPrimaSummary from "./MateriaPrimaSummary";
import MateriaPrimaDetails from "./MateriaPrimaDetails";



interface MateriaPrimaBlockProps {
    inData: MateriaPrimaModel;
    // La idea es que el evento que le llegue al padre sea solamente un aviso y no la data.
    onChange: (updatedItem: MateriaPrimaModel) => void;
}

// este componente se va a dividir en 3: un summary, un detalle y un master

// Se utiliza dentro de 'CentralDeMezclasForm'. ???
const MateriaPrimaBlock = (props: MateriaPrimaBlockProps) => {
    const [internalData, setInternalData] = useState<MateriaPrimaModel>(props.inData);
    const [mostrarDetalles, setMostrarDetalles] = useState(true);

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    // Maneja solamente el cambio en la propiedad "cantidad", y actualiza los totales.
    const handleCantidadChange = (inValue: number) => {
    };

    // Maneja el cambio en los detalles de la materia prima.
    // Este método se llama desde el componente 'MateriaPrimaDetails'.
    // Se espera que este método actualice el estado interno y notifique al padre.
    const handleMateriaPrimaChange = (inItem: MateriaPrimaModel) => {

    }

    return (
        <div className="flex flex-col gap-6">
            <MateriaPrimaSummary
                cantidad={internalData.cantidad}
                total={internalData.total}
                totalPorMl={internalData.totalPorMl}
                // mostrarDetalles={mostrarDetalles}
                onCantidadChange={handleCantidadChange} /* <- REVISAR LOGICA Y NOMBRES */
                onMostrarDetallesChange={setMostrarDetalles}
            />
            <div>
                <MateriaPrimaDetails
                    inData={internalData}
                    mostrarDetalles={mostrarDetalles}
                    onChange={handleMateriaPrimaChange}
                />
            </div>
        </div>
    );
};

export default MateriaPrimaBlock;