import React, { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useAccordionGroup } from "./AccordionGroup";

interface AccordionItemProps {
    id: string;
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    onExpand?: () => void;
}

const AccordionItem = ({ id, title, icon, children, onExpand }: AccordionItemProps) => {
    const { openIds, toggleId } = useAccordionGroup();
    const isOpen = openIds.includes(id);

    useEffect(() => {
        if (isOpen && onExpand) onExpand();
    }, [isOpen]);

    return (
        <div className="border border-gray-200 rounded-md">
            <button
                onClick={() => toggleId(id)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                <div className="flex items-center gap-2">
                    {icon}
                    <span>{title}</span>
                </div>
                <ChevronDown
                    className={clsx(
                        "h-4 w-4 transform transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0"
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
