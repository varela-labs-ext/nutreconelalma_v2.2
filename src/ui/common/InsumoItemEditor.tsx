import ClinicaInputModel from "@/logic/models/common/ClinicaInputModel";
import { isValidNumber } from "@/utils/validators";
import InputNumberField from "./InputNumberField";
import ReadOnlyNumberField from "./ReadOnlyNumberField";
import CalculosService from "@/logic/services/CalculosService";
import { useEffect, useRef, useState } from "react";

interface InsumoItemEditorProps {
    inData: ClinicaInputModel;
    mostrarDetalles: boolean;
    onChange: (itemUpdated: ClinicaInputModel) => void;
}

const InsumoItemEditor = (props: InsumoItemEditorProps) => {
    const [internalData, setInternalData] = useState<ClinicaInputModel>(props.inData);
    const debounceRef = useRef<number | null>(null); // Ref para manejar el debounce

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    const handleChange = (inName: string, inValue: number) => {
        if (isValidNumber(inValue)) {
            console.debug(`InsomoEditor. Value: ${inValue}, Name: ${inName}`);
            const updatedItem: ClinicaInputModel = {
                ...internalData,
                [inName]: inValue,
            };

            // Actualiza los totales dentro del objeto
            CalculosService.CalcularInsumo(updatedItem);

            setInternalData(updatedItem);

            // Limpiar debounce anterior. Esto es para evitar múltiples llamadas rápidas
            // que puedan generar múltiples actualizaciones innecesarias.
            // Si ya hay un debounce activo, lo cancelamos.
            if (debounceRef.current !== null) {
                clearTimeout(debounceRef.current);
            }

            // Agendar nueva ejecución. Esto es útil para evitar que se llame a onChange demasiadas veces
            // cuando el usuario está escribiendo rápidamente.
            debounceRef.current = setTimeout(() => {
                console.log("InsumoItemEditor.handleChange() - Debounced call to onChange");
                console.log("------------");
                props.onChange(updatedItem);
            }, 700);
        }
    };

    return (
        <div id="insumoItemEditorForm" className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 w-full">
                {/* <input type="number" className="w-full sm:w-auto text-left border max-w-full sm:max-w-[110px]" /> */}

                <div className="md:col-span-1 w-full text-left">
                    <div className="text-sm text-gray-900 dark:text-white">
                        {internalData.label}
                    </div>
                </div>

                <div className="md:col-span-1 w-full ">
                    {props.mostrarDetalles && (
                        <InputNumberField
                            label="presentacionMl"
                            name="presentacionMl"
                            value={internalData.presentacionMl}
                            readOnly={false}
                            onChange={handleChange}
                        />
                    )}
                </div>

                <div id="cantidadMlDiv" className="md:col-span-1 w-full ">
                    <InputNumberField
                        label="cantidadMl"
                        name="cantidadMl"
                        value={internalData.cantidadMl}
                        readOnly={false}
                        onChange={handleChange}
                    />
                </div>

                <div className="md:col-span-1 w-full">
                    <InputNumberField
                        label="costoPorUnidad"
                        name="costoPorUnidad"
                        value={internalData.costoPorUnidad}
                        readOnly={false}
                        symbol="$"
                        onChange={handleChange}
                    />
                </div>

                <div className="md:col-span-1 w-full">
                    <ReadOnlyNumberField
                        label="costoTotalPorUnidad"
                        name="costoTotalPorUnidad"
                        symbol="$"
                        value={internalData.costoTotalPorUnidad}
                    />
                </div>
            </div>
        </div>
    );
}

export default InsumoItemEditor;