// PopulationTypeInput


import { enumToKeyValueArray } from "@/logic/common/functions";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";

interface PopulationTypeInputProps {
    inPopulationType: PopulationTypeIdEnum;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
    onChange: (selected: PopulationTypeIdEnum) => void;
}

export const PopulationTypeInput = (props: PopulationTypeInputProps) => {
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    const handleTipoPoblacionChange = (value: string) => {
        const esClaveValida = Object.keys(PopulationTypeIdEnum).includes(value);

        if (!esClaveValida) {
            console.warn(`Valor inválido: ${value}`);
            return;
        }

        const updateValue = Number(value);
        const output: PopulationTypeIdEnum = updateValue as PopulationTypeIdEnum;
        props.onChange(output);
    };

    //const enumKeys = Object.keys(PopulationTypeIdEnum).filter(k => isNaN(Number(k)));

    const poblacionArray = enumToKeyValueArray(PopulationTypeIdEnum);

    const getLabelClass = () => {
        const baseClass = "block md:hidden"; /* Esto hace que cuando sea mayor o igual a md (el size) se oculte */
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-700 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };
    // "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"

    const getSelectClass = () => {
        const baseClass = "rounded-xl px-3 py-2 w-full";
        const baseClassB = "shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 transition-colors";
        const moreClass = "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-white";
        const borderClass = "border border-gray-200 focus:border-purple-500 focus:ring-purple-500";

        return `${baseClass} ${baseClassB} ${borderClass} ${moreClass}`;
    }

    return (
        <div id="tipoPoblacionDiv" className="flex flex-col" >
            <label htmlFor="tipoPoblacion" className={getLabelClass()} >
                Tipo de Población
            </label>
            < select
                name="tipoPoblacion"
                value={props.inPopulationType}
                onChange={(e) => handleTipoPoblacionChange(e.target.value)}
                className={getSelectClass()}
            >
                {
                    poblacionArray.map((item) => (
                        <option key={item.key} value={item.key}>
                            {item.value}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default PopulationTypeInput;