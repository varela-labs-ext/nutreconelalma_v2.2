import { enumToKeyValueArray } from "@/logic/common/functions";
import TipoPoblacionIdEnum from "@/logic/enums/TipoPoblacionIdEnum";

interface TipoPoblacionFieldProps {
    tipo: TipoPoblacionIdEnum;
    onChange: (selected: TipoPoblacionIdEnum) => void;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
}

export const TipoPoblacionField: React.FC<TipoPoblacionFieldProps> = (props) => {
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    const handleTipoPoblacionChange = (value: string) => {
        const esClaveValida = Object.keys(TipoPoblacionIdEnum).includes(value);

        if (!esClaveValida) {
            console.warn(`Valor inválido: ${value}`);
            return;
        }

        const updateValue = Number(value);
        const output: TipoPoblacionIdEnum = updateValue as TipoPoblacionIdEnum;
        props.onChange(output);
    };

    //const enumKeys = Object.keys(TipoPoblacionIdEnum).filter(k => isNaN(Number(k)));

    const poblacionArray = enumToKeyValueArray(TipoPoblacionIdEnum);

    const getLabelClass = () => {
        const baseClass = "block md:hidden"; /* Esto hace que cuando sea mayor o igual a md (el size) se oculte */
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-700 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };
    // "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"

    const getSelectClass = () => {
        const baseClass = "rounded-lg px-3 py-2 w-full";
        const baseClassB = "shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 transition-colors";
        const moreClass = "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-white";
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
                value={props.tipo}
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

export default TipoPoblacionField;