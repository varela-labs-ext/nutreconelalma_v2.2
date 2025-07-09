import { useEffect, useState } from "react";

interface InputNumberFieldProps {
    label: string;
    name: string;
    value: number;
    //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: (name: string, value: number) => void;
    min?: number;
    max?: number;
    readOnly?: boolean;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
    symbol?: string; // Si se quiere mostrar un simbolo al lado del input
}

const InputNumberField = (props: InputNumberFieldProps) => {
    const [localValue, setLocalValue] = useState<number>(props.value);
    const [error, setError] = useState<string | null>(null);
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    // Si cambia el valor desde el padre, actualizamos el local
    useEffect(() => {
        setLocalValue(props.value);
    }, [props.value]);

    const cleanUp = (value: number): number => {
        return isNaN(value) ? -99999 : value;
    }

    const isValid = (value: number): boolean => {
        let _isValid: boolean = true;

        if (isNaN(value)) {
            setError("Debe ser un número válido");
            _isValid = false;
        } else if (props.min !== undefined && value < props.min) {
            setError(`Debe ser mayor o igual a ${props.min}`);
            _isValid = false;
        } else if (props.max !== undefined && value > props.max) {
            setError(`Debe ser menor o igual a ${props.max}`);
            _isValid = false;
        }

        return _isValid;
    }

    // const handleInternalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = parseFloat(e.target.value);
    //     console.log(value);

    //     if (isValid(value)) {
    //         setError(null);
    //     } else {
    //         return;
    //     }

    //     props.onChange(props.name, value);
    // };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: number = event.target.valueAsNumber;

        // console.log(newValue);

        if (isValid(newValue)) {
            setError(null);
        } else {
            return;
        }
        // console.log("handleChange:" + newValue);
        setLocalValue(isNaN(newValue) ? 0 : newValue);
    };

    const commitChange = () => {
        let value: number = localValue;
        if (value !== props.value) {
            console.log(`Input: ${props.name} changed to ${value}`);
            props.onChange(props.name, value);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            commitChange();
            event.currentTarget.blur(); // opcional: para disparar también onBlur
        }
    };

    const getContainerClass = () => {
        const baseClass = "flex";
        const leftClass = "flex-row items-center justify-between gap-2";
        const topClass = "flex-col";

        return `${baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getLabelClass = () => {
        const baseClass = "block md:hidden"; /* Esto hace que cuando sea mayor o igual a md (el size) se oculte */
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-500 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-500 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };



    const getInputClass = () => {
        const paddingLeft = props.symbol ? "pl-7" : "pl-3";
        const baseClass = `rounded-xl ${paddingLeft} pr-3 py-2 w-full text-left`;
        const baseClassB = "text-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 transition-colors";
        const moreClass = "dark:bg-gray-800 dark:text-white";

        const borderClass = error
            ? "border border-red-500 focus:border-red-500 focus:ring-red-400"
            : "border border-gray-200 focus:border-purple-500 focus:ring-purple-500";

        return `${baseClass} ${baseClassB} ${borderClass} ${moreClass}`;
    };

    const symbolClass =
        "absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none";




    const inputWrapperClass = "relative w-full";

    return (
        <div className={getContainerClass()}>
            <label htmlFor={props.name} className={getLabelClass()} >
                {props.label}
            </label>
            <div className={inputWrapperClass}>
                {props.symbol && (
                    <span className={symbolClass}>{props.symbol}</span>
                )}
                <input
                    type="number"
                    name={props.name}
                    // value={props.value}
                    // onChange={handleInternalChange}
                    value={cleanUp(localValue)}
                    onChange={handleChange}
                    onBlur={commitChange}
                    onKeyDown={handleKeyDown}
                    min={props.min}
                    max={props.max}
                    readOnly={props.readOnly}
                    className={getInputClass()}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-600 text-right w-full block">{error}</p>
                )}
            </div>
        </div >
    );
};

export default InputNumberField;