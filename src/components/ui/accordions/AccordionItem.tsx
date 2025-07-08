import React, { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useAccordionGroup } from "./AccordionGroup";
import type { LucideIcon } from "lucide-react"; // ✅ Para que los íconos sean de lucide-react

interface AccordionItemProps {
    id: string;
    title: string;
    icon?: LucideIcon; // ✅ Íconos exclusivos de lucide-react
    children: React.ReactNode;
    onExpand?: () => void;
}

const AccordionItem = ({ id, title, icon, children, onExpand }: AccordionItemProps) => {
    const { openIds, toggleId } = useAccordionGroup();
    const isOpen = openIds.includes(id);

    useEffect(() => {
        if (isOpen && onExpand) onExpand();
    }, [isOpen]);

    // ✅ Asignamos el componente Icon si existe
    const Icon = icon;

    return (
        <div className="border border-gray-200 rounded-md">
            <button
                onClick={() => toggleId(id)}
                className={clsx(
                    "group w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium border-l-4 transition-colors duration-200",
                    isOpen
                        ? "bg-purple-100 text-purple-700 border-purple-500"
                        : "bg-gray-100 text-gray-800 border-transparent hover:bg-purple-50 hover:text-purple-600"
                )}
            >
                <div className="flex items-center gap-2">
                    {Icon && (
                        <Icon
                            className={clsx(
                                "h-4 w-4 transition-colors",
                                isOpen
                                    ? "text-purple-700"
                                    : "text-gray-500 group-hover:text-purple-600"
                            )}
                        />
                    )}
                    <span>{title}</span>
                </div>

                <ChevronDown
                    className={clsx(
                        "h-4 w-4 transform transition-transform duration-300 transition-colors",
                        isOpen
                            ? "rotate-180 text-purple-700"
                            : "rotate-0 text-gray-500 group-hover:text-purple-600"
                    )}
                />
            </button>

            {isOpen && (
                <div className="px-4 py-3 border-t border-gray-100 bg-white animate-fade-in">
                    {children}
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
