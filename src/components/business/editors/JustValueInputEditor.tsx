import InputNumberField from "@/components/ui/inputs/InputNumberField";
import JustValueItemModel from "@/logic/models/common/JustValueItemModel";
import UnitCostItemModel from "@/logic/models/common/UnitCostItemModel";
import CalculationService from "@/logic/services/CalculationService";
import ReadOnlyNumberField from "@/ui/common/ReadOnlyNumberField";
import { isValidNumber } from "@/utils/validators";
import { useEffect, useRef, useState } from "react";

interface JustValueInputEditorProps {
    inData: JustValueItemModel;
    inName: string;
    onChange: (inName: string, newItem: JustValueItemModel) => void;
}

const JustValueInputEditor = (props: JustValueInputEditorProps) => {
    const [internalData, setInternalData] = useState<JustValueItemModel>(props.inData);
    const debounceRef = useRef<number | null>(null);

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    const handleChange = (inName: string, inValue: number) => {
        if (isValidNumber(inValue)) {
            const output: JustValueItemModel = {
                ...internalData,
                [inName]: inValue,
            };

            // Actualiza los totales dentro del objeto
            // CalculationService.ComputeUnitCostInput(output);

            setInternalData(output);

            if (debounceRef.current !== null) {
                clearTimeout(debounceRef.current);
            }

            debounceRef.current = setTimeout(() => {
                props.onChange(props.inName, output);
            }, 200);
        }
    }

    const getMainDivClassName = (): string => {
        const base = "flex flex-col md:flex-row md:items-start gap-4 bg-white";
        const over = "hover:bg-purple-50";
        const focus = "focus-within:bg-purple-50";
        const more = "transition-colors duration-300 p-2 border-b border-gray-200";

        return `${base} ${over} ${focus} ${more}`;
    }

    return (
        <>
            <div className={getMainDivClassName()}>
                <div className="pt-2 pb-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 w-full">
                    <div className="md:col-span-3 w-full text-left">
                        <div className="pt-2 text-sm text-gray-500 dark:text-white">
                            {internalData.label}
                        </div>
                    </div>

                    <div className="md:col-span-1 w-full">
                        <InputNumberField
                            label="value"
                            name="value"
                            value={internalData.value}
                            readOnly={false}
                            symbol="$"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default JustValueInputEditor;