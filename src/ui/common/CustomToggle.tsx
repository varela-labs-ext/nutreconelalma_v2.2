import React from "react";

type CustomToggleProps = {
    label: string;
    value: boolean;
    size?: "sm" | "md" | "lg";
    onChange: (newValue: boolean) => void;
};

const CustomToggle = (props: CustomToggleProps) => {
    const onChangeToggle = () => {
        props.onChange(!props.value);
    };

    const size = props.size ?? "md";

    // Línea agregada: configuración de tamaño
    const sizeConfig = {
        sm: { width: "w-9", height: "h-5", circulo: "w-3.5 h-3.5", translate: "translate-x-4" },
        md: { width: "w-11", height: "h-6", circulo: "w-4 h-4", translate: "translate-x-5" },
        lg: { width: "w-14", height: "h-7", circulo: "w-5 h-5", translate: "translate-x-7" },
    };

    const styles = sizeConfig[size];

    return (
        <label className="flex items-center space-x-4 cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={props.value}
                    onChange={onChangeToggle}
                    className="sr-only"
                />
                <div className={`rounded-full transition-colors ${styles.width} ${styles.height} 
            ${props.value ? "bg-purple-500 dark:bg-purple-400" : "bg-gray-300 dark:bg-gray-600"}`}
                >
                </div>
                <div className={`absolute left-1 top-1 bg-white dark:bg-gray-100 rounded-full transition-transform 
            ${styles.circulo} ${props.value ? styles.translate : "translate-x-0"}`}
                >
                </div>
            </div>
            <span className="text-sm font-medium text-purple-700">{props.label}</span>
        </label>
    );
};

export default CustomToggle;
