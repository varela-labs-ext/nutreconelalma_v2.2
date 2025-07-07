// src/components/ui/PanelSelector.tsx
import { ReactElement, useState } from "react";
import PanelTab, { PanelTabProps } from "./PanelTab";

type PanelSelectorProps = {
    children: ReactElement<PanelTabProps> | ReactElement<PanelTabProps>[]; // ✅ uno o varios
    onTabSelected?: (index: number) => void;
};

const PanelSelector = (props: PanelSelectorProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const childrenArray = Array.isArray(props.children)
        ? props.children
        : [props.children]; // ✅ soporte para un solo hijo

    const handleSelect = (index: number) => {
        setActiveIndex(index);
        if (props.onTabSelected) {
            props.onTabSelected(index);
        }
    };

    return (
        <div className="space-y-4">
            {/* Paneles tipo botón */}
            <div className="flex flex-wrap gap-2">
                {childrenArray.map((child, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={index}
                            onClick={() => handleSelect(index)}
                            className={`flex items-center gap-2 rounded-xl border px-4 py-2 transition 
                ${isActive
                                    ? "border-purple-600 bg-purple-100 text-purple-700"
                                    : "border-gray-300 bg-white hover:bg-gray-50"
                                }`}
                        >
                            {child.props.icon && <span>{child.props.icon}</span>}
                            <span>{child.props.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Contenido visible del tab activo */}
            <div className="mt-4 min-h-[4rem]">
                {childrenArray.map((child, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={index}
                            className={`transition-opacity duration-300 ease-in-out ${isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                                }`}
                        >
                            {child.props.children}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PanelSelector;
