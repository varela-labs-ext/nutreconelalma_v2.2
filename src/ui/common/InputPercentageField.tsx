import { useState } from "react";

interface InputPercentageFieldProps {
    label: string;
    name: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
}

export const InputPercentageField = (props: InputPercentageFieldProps) => {
    const [error, setError] = useState<string | null>(null);
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    const handleInternalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        // Solo permitir números enteros del 0 al 100
        const numericValue = parseInt(input, 10);

        if (!/^\d{0,3}$/.test(input)) {
            setError("Solo characteres numéricos");
            return; // Evitar caracteres no numéricos o más de 3 dígitos
        } else if (isNaN(numericValue)) {
            setError("Debe ser un número válido");
            return;
        } else if (numericValue < 0 || numericValue > 100) {
            setError("Debe ser un número entre 0 y 100");
            return;
        } else {
            setError(null);
        }

        console.log(numericValue);

        props.onChange(e);
    };

    // const containerClass =
    //     labelPosition === "left"
    //         ? "flex flex-row items-center justify-between gap-2"
    //         : "flex flex-col";

    const getContainerClass = () => {
        const baseClass = "flex";
        const leftClass = "flex-row items-center justify-between gap-2";
        const topClass = "flex-col";

        return `${baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };



    const inputWrapperClass = "relative w-full"; // relative max-w-[200px]

    // const inputClass =
    //     "border rounded-lg px-3 py-2 w-full pr-7 " +
    //     "shadow-sm focus:outline-none focus:ring-2 " +
    //     (error
    //         ? "border-red-500 focus:ring-red-400" ok 
    //         : "border-gray-300 focus:ring-blue-500") + ok
    //     " dark:bg-gray-800 dark:text-white"; ok

    // const labelClass =
    //     labelPosition === "left"
    //         ? "w-32 text-sm font-medium text-gray-700 dark:text-gray-300"
    //         : "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

    const getLabelClass = () => {
        const baseClass = "block md:hidden"; /* Esto hace que cuando sea mayor o igual a md (el size) se oculte */
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-700 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getInputClass = () => {
        const baseClass = "border rounded-lg px-3 py-2 w-full text-left pr-7";
        const baseClassB = "text-gray-700 shadow-sm focus:outline-none focus:ring-2";
        const withErrorClass = "border-red-500 focus:ring-red-400";
        const withoutErrorClass = "border-gray-300 focus:ring-blue-500";
        const moreClass = "dark:bg-gray-800 dark:text-white";

        return `${baseClass} ${baseClassB} ${error ? withErrorClass : withoutErrorClass} ${moreClass}`;
    };

    const percentSymbolClass =
        "absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none";
    //"absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none";
    //"absolute right-3 top-1/2           -translate-y-1/2 text-purple-600

    return (
        <div className={getContainerClass()} >
            <label htmlFor={props.name} className={getLabelClass()} >
                {props.label}
            </label>
            < div className={inputWrapperClass} >
                <input
                    type="number"
                    inputMode="numeric"
                    name={props.name}
                    value={props.value}
                    onChange={handleInternalChange}
                    className={getInputClass()}
                    min={0}
                    max={100}
                    step={1}
                />
                <span className={percentSymbolClass}>%</span>
                {
                    error && (
                        <p className="mt-1 text-sm text-red-600" > {error} </p>
                    )}
            </div>
        </div>
    );
};

export default InputPercentageField;
