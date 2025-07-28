import { useEffect, useState } from "react";

interface InputNumberFieldProps {
    label: string;
    name: string;
    value: number;
    onChange: (name: string, value: number) => void;
    min?: number;
    max?: number;
    readOnly?: boolean;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
    symbol?: string; // Si se quiere mostrar un simbolo al lado del input
}

const InputNumberField = (props: InputNumberFieldProps) => {
    const [localValue, setLocalValue] = useState<string>(props.value.toString());
    const [error, setError] = useState<string | null>(null);
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    // Si cambia el valor desde el padre, actualizamos el local
    useEffect(() => {
        setLocalValue(props.value.toString());
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

        return true;
    }

    const isValidString = (inValue: string | null | undefined): boolean => {
        return inValue !== undefined && inValue !== null && inValue.trim() !== '';
    };

    const isRealNumber = (inValue: string | undefined | null): boolean => {
        if (inValue !== undefined && inValue !== null && inValue.trim() !== '') {
            if (!isNaN(Number(inValue.replace(",", ".")))) {
                return true;
            }
        }

        return false;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        let newValue: string = event.target.value;
        console.log(`handleChange: ${event.target.value}`);

        if (isRealNumber(newValue)) {
            setError(null);
            newValue = newValue.replace(",", ".");
        } else {
            setError("error");
            newValue = "";
        }

        setLocalValue(newValue);
    };

    const callOnChange = () => {
        let value: number = Number(localValue);
        if (value !== props.value) {
            console.log(`Input: ${props.name} changed to ${value}`);
            props.onChange(props.name, value);
        }
    }

    const commitChange = () => {
        if (isRealNumber(localValue)) {
            callOnChange();
        } else {
            setLocalValue("0");
            setError(null);
            callOnChange();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.currentTarget.blur();
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
        const leftClass = "w-32 text-sm font-medium text-gray-500";
        const topClass = "block text-sm font-medium text-gray-500 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getInputClass = () => {
        const paddingLeft = props.symbol ? "pl-5" : "pl-3";
        const baseClass = `rounded-xl ${paddingLeft} pr-3 py-2 w-full text-left`;
        const baseClassB = "text-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-0 transition-colors";
        const moreClass = "bg-gray-50 opacity-70 cursor-not-allowed";

        const borderClass = error
            ? "border border-red-500 focus:border-red-500 focus:ring-red-400"
            : "border border-gray-200 focus:border-purple-500 focus:ring-purple-500";

        return `${baseClass} ${baseClassB} ${borderClass} ${props.readOnly ? moreClass : ""}`;
    };

    const symbolClass =
        "absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none";

    const inputWrapperClass = "relative w-full";

    const getValue = (): string => {
        return localValue;
    }

    return (
        <div className={getContainerClass()}>
            <label htmlFor={props.name} className={getLabelClass()} >
                {props.label}
            </label>
            <div className={inputWrapperClass}>
                {props.symbol && (
                    <span className={symbolClass}>
                        {props.symbol}
                    </span>
                )}
                <input
                    type="number"
                    name={props.name}
                    value={getValue()}
                    onChange={handleChange}
                    onBlur={commitChange}
                    onKeyDown={handleKeyDown}
                    min={props.min}
                    max={props.max}
                    readOnly={props.readOnly}
                    className={getInputClass()}
                />
            </div>
        </div >
    );
};

export default InputNumberField;