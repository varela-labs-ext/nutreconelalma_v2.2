import InsumoItemModel from "@/logic/models/common/InsumoItemModel";
import MateriaPrimaModel from "@/logic/models/materiaPrima/MateriaPrimaModel";
import InsumoItemEditor from "../common/InsumoItemEditor";
import { useEffect, useState } from "react";
import CalculosService from "@/logic/services/CalculosService";


interface MateriaPrimaDetailsProps {
    inData: MateriaPrimaModel;
    mostrarDetalles: boolean;
    onChange: (updatedItem: MateriaPrimaModel) => void;
}

const MateriaPrimaDetails = (props: MateriaPrimaDetailsProps) => {
    const [internalData, setInternalData] = useState<MateriaPrimaModel>(props.inData);

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    // REGLA DE ORO, NUNCA LLAMAR AL EVENTO DEL PROPS DESDE DENTRO DEL USEFFECT, ya que esto puede generar un bucle infinito de actualizaciones.

    const handleInsumoChange = (inKey: string, inItem: InsumoItemModel) => {
        console.log("Insumo cambiado: " + inKey);
        console.log(inItem);

        // Actualizar el estado interno con el nuevo item
        const updatedData: MateriaPrimaModel = {
            ...internalData,
            [inKey]: inItem
        };

        // Actualiza los totales dentro del objeto
        CalculosService.CalcularMateriaPrima(updatedData);

        setInternalData(updatedData); // Verificar si se puede meter dentro del metodo del setTimeout

        props.onChange(internalData);
    }

    const insumoEditorWrapperClass = "p-1";

    return (
        <div className="flex flex-col gap-2">
            {Object.entries(props.inData).map(([clave, valor]) => {
                if (
                    typeof valor === "object" &&
                    valor !== null &&
                    // valor instanceof InsumoItemModel &&
                    !valor.excluirDelCalculo &&
                    1 == 1
                ) {
                    return (
                        <div id={clave} key={clave} className={insumoEditorWrapperClass} >
                            {/* Fila editable por cada InsumoItemModel */}
                            <InsumoItemEditor
                                inData={valor}
                                mostrarDetalles={props.mostrarDetalles}
                                onChange={(updated) => handleInsumoChange(clave, updated)}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default MateriaPrimaDetails;