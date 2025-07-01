import InsumoItemModel from "@/logic/models/common/InsumoItemModel";
import { isValidNumber } from "@/utils/validators";
import InputNumberField from "./InputNumberField";
import ReadOnlyNumberField from "./ReadOnlyNumberField";

interface InsumoItemEditorProps {
    item: InsumoItemModel;
    mostrarDetalles: boolean;
    onChange: (itemUpdated: InsumoItemModel) => void;
}

const InsumoItemEditor = (props: InsumoItemEditorProps) => {
    const item = props.item;

    const handleChange = (inName: string, inValue: number) => {
        if (isValidNumber(inValue)) {
            console.debug(`InsomoEditor. Value: ${inValue}, Name: ${inName}`);

            const value: number = inValue;
            const updatedItem: InsumoItemModel = {
                ...item,
                [inName]: value,
            };

            props.onChange(updatedItem);
        }
    };

    return (
        <div id="insumoItemEditorForm" className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-2 w-full">
                {/* <input type="number" className="w-full sm:w-auto text-left border max-w-full sm:max-w-[110px]" /> */}

                <div className="md:col-span-2 w-full text-left">
                    <div className="text-sm text-gray-900 dark:text-white">
                        {item.label}
                    </div>
                </div>

                <div className="md:col-span-1 w-full ">
                    {props.mostrarDetalles && (
                        <InputNumberField
                            label="presentacionMl"
                            name="presentacionMl"
                            value={item.presentacionMl}
                            readOnly={false}
                            onChange={handleChange}
                        />
                    )}
                </div>

                <div id="cantidadMlDiv" className="md:col-span-1 w-full ">
                    <InputNumberField
                        label="cantidadMl"
                        name="cantidadMl"
                        value={item.cantidadMl}
                        readOnly={false}
                        onChange={handleChange}
                    />
                </div>

                <div className="md:col-span-1 w-full">
                    <InputNumberField
                        label="costoPorUnidad"
                        name="costoPorUnidad"
                        value={item.costoPorUnidad}
                        readOnly={false}
                        onChange={handleChange}
                    />
                </div>

                <div className="md:col-span-1 w-full">
                    <ReadOnlyNumberField
                        label="costoTotalPorUnidad"
                        name="costoTotalPorUnidad"
                        value={item.costoTotalPorUnidad}
                    />
                </div>
            </div>
        </div>
    );
}

export default InsumoItemEditor;