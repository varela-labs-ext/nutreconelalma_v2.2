// PopulationTypeInput

import { enumToKeyValueArray } from "@/logic/common/functions";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import { Bot, Cpu, FlaskConical, GraduationCap, ToyBrick, User } from "lucide-react";
import ComboboxSelector from "../selectors/ComboboxSelector";

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

        console.log('handleTipoPoblacionChange: ' + output);
        props.onChange(output);
    };

    const getLabelClass = () => {
        const baseClass = "block md:hidden"; /* Esto hace que cuando sea mayor o igual a md (el size) se oculte */
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-700 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getSelectClass = () => {
        const baseClass = "rounded-xl px-3 py-2 w-full";
        const baseClassB = "shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 transition-colors";
        const moreClass = "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-white";
        const borderClass = "border border-gray-200 focus:border-purple-500 focus:ring-purple-500";

        return `${baseClass} ${baseClassB} ${borderClass} ${moreClass}`;
    }

    const getPopulationArray = () => {
        const output = [
            { label: "Adulto", value: "0", icon: <User size={16} /> },
            { label: "Neonatal", value: "1", icon: <ToyBrick size={16} /> },
            { label: "Pediatrica", value: "2", icon: <GraduationCap size={16} /> },
        ];

        return output;
    }

    return (
        <div id="tipoPoblacionDiv" className="flex flex-col" >
            <label htmlFor="tipoPoblacion" className={getLabelClass()} >
                Tipo de Población
            </label>
            <ComboboxSelector
                value={props.inPopulationType.toString()}
                onChange={(e) => handleTipoPoblacionChange(e)}
                options={getPopulationArray()}
                className={getSelectClass()}
            />


            {/* < select
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
            </select> */}
        </div>
    );
}

export default PopulationTypeInput;