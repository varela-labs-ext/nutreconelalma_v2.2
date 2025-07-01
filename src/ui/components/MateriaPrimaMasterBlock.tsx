import MateriaPrimaModel from "@/logic/models/materiaPrima/MateriaPrimaModel";
import { useState } from "react";
import MateriaPrimaSummary from "./MateriaPrimaSummary";
import MateriaPrimaDetails from "./MateriaPrimaDetails";



interface MateriaPrimaBlockProps {
    item: MateriaPrimaModel;
    onChange: (updatedItem: MateriaPrimaModel) => void;
}

// este componente se va a dividir en 3: un summary, un detalle y un master

// Se utiliza dentro de 'CentralDeMezclasForm'. ???
const MateriaPrimaBlock = (props: MateriaPrimaBlockProps) => {
    const [mostrarDetalles, setMostrarDetalles] = useState(true);

    // Maneja solamente el cambio en la propiedad "cantidad", y actualiza los totales.
    const handleCantidadChange = (nuevaCantidad: number) => {

        const output: MateriaPrimaModel = {
            ...props.item,
            cantidad: nuevaCantidad,
            //...calcularTotales({ ...data, cantidad: nuevaCantidad }),  // <- esto agrega los mismos campos al modelo original pero ya calculados
        };

        console.log("MateriaPrimaBlock.handleCantidadChange(), Cantidad: " + nuevaCantidad);

        props.onChange(output);
    };

    const handleInsumoItemChange = (updatedItem: MateriaPrimaModel) => {
        props.onChange(updatedItem);
    }

    return (
        <div className="flex flex-col gap-6">
            <MateriaPrimaSummary
                cantidad={props.item.cantidad}
                total={props.item.total}
                totalPorMl={props.item.totalPorMl}
                // mostrarDetalles={mostrarDetalles}
                onCantidadChange={handleCantidadChange} /* <- REVISAR LOGICA Y NOMBRES */
                onMostrarDetallesChange={setMostrarDetalles}
            />
            <div>
                <MateriaPrimaDetails
                    item={props.item}
                    mostrarDetalles={true}
                    onChange={handleInsumoItemChange}
                />
            </div>
        </div>
    );
};

export default MateriaPrimaBlock;