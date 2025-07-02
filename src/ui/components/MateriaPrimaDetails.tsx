import InsumoItemModel from "@/logic/models/common/InsumoItemModel";
import MateriaPrimaModel from "@/logic/models/materiaPrima/MateriaPrimaModel";
import InsumoItemEditor from "../common/InsumoItemEditor";
import { useEffect, useRef, useState } from "react";
import CalculosService from "@/logic/services/CalculosService";


interface MateriaPrimaDetailsProps {
    inData: MateriaPrimaModel;
    mostrarDetalles: boolean;
    onChange: (updatedItem: MateriaPrimaModel) => void;
}

const MateriaPrimaDetails = (props: MateriaPrimaDetailsProps) => {
    const [internalData, setInternalData] = useState<MateriaPrimaModel>(props.inData);
    const debounceRef = useRef<number | null>(null); // Ref para manejar el debounce

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);


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

        setInternalData(updatedData);

        if (debounceRef.current !== null) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            props.onChange(updatedData); // Llamar al callback onChange para notificar al padre
        }, 500);
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