import React, { useState, useEffect } from "react";

interface InputMoneyFieldProps {
    label: string;
    name: string;
    value: number;
    onChange: (valor: number) => void;
    prefix?: string;
    suffix?: string;
    placeholder?: string;
    readOnly?: boolean;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
}

const InputMoneyField = (props: InputMoneyFieldProps) => {
    const [tempValue, setTempValue] = useState<number>(props.value);

    useEffect(() => {
        setTempValue(props.value);
    }, [props.value]);

    const handleConfirm = () => {
        // const parsed = parseFloat(tempValue);
        if (!isNaN(tempValue) && tempValue !== props.value) {
            props.onChange(tempValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            (e.target as HTMLInputElement).blur(); // fuerza blur para mantener consistencia
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const parsed: number = parseFloat(event.target.value);
        const newValue: number = event.target.valueAsNumber;

        if (!isNaN(parsed) && parsed !== props.value) {
            // props.onChange(parsed);
            setTempValue(parsed);
        }
    }

    return (
        <div className="flex rounded-md shadow-sm border border-gray-300 overflow-hidden w-full">
            {props.prefix && (
                <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 text-sm">
                    {props.prefix}
                </span>
            )}
            <input
                type="text"
                className="flex-1 border-none px-3 py-2 text-sm focus:outline-none focus:ring-0"
                value={tempValue}
                placeholder={props.placeholder}
                inputMode="decimal"
                pattern="[0-9]*"
                readOnly={props.readOnly}

                onChange={handleOnChange}
                onBlur={handleConfirm}
                onKeyDown={handleKeyDown}
            />
            {props.suffix && (
                <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 text-sm">
                    {props.suffix}
                </span>
            )}
        </div>
    );
};

export default InputMoneyField;
