import React, { useState, useEffect } from "react";

interface InputMoneyFieldProps {
    value: number;
    onChange: (valor: number) => void;
    prefix?: string;
    suffix?: string;
    placeholder?: string;
}

const InputMoneyField = ({
    value,
    onChange,
    prefix,
    suffix,
    placeholder,
}: InputMoneyFieldProps) => {
    const [tempValue, setTempValue] = useState<string>(value.toString());

    useEffect(() => {
        setTempValue(value.toString());
    }, [value]);

    const handleConfirm = () => {
        const parsed = parseFloat(tempValue);
        if (!isNaN(parsed) && parsed !== value) {
            onChange(parsed);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            (e.target as HTMLInputElement).blur(); // fuerza blur para mantener consistencia
        }
    };

    return (
        <div className="flex rounded-md shadow-sm border border-gray-300 overflow-hidden w-full">
            {prefix && (
                <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 text-sm">
                    {prefix}
                </span>
            )}
            <input
                type="text"
                className="flex-1 border-none px-3 py-2 text-sm focus:outline-none focus:ring-0"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onBlur={handleConfirm}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                inputMode="decimal"
                pattern="[0-9]*"
            />
            {suffix && (
                <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 text-sm">
                    {suffix}
                </span>
            )}
        </div>
    );
};

export default InputMoneyField;
