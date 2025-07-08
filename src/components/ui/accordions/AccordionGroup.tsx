import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccordionGroupContextType {
    openIds: string[];
    toggleId: (id: string) => void;
    multiOpen: boolean;
}

const AccordionGroupContext = createContext<AccordionGroupContextType | undefined>(undefined);

export const useAccordionGroup = () => {
    const ctx = useContext(AccordionGroupContext);
    if (!ctx) throw new Error("useAccordionGroup debe usarse dentro de <AccordionGroup>");
    return ctx;
};

interface AccordionGroupProps {
    children: ReactNode;
    multiOpen?: boolean;
    defaultOpenIds?: string[]; // soporta múltiples desde el inicio si se desea
}

export const AccordionGroup = ({
    children,
    multiOpen = false,
    defaultOpenIds = [],
}: AccordionGroupProps) => {
    const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

    const toggleId = (id: string) => {
        setOpenIds((prev) => {
            if (multiOpen) {
                return prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
            } else {
                return prev.includes(id) ? [] : [id];
            }
        });
    };

    return (
        <AccordionGroupContext.Provider value={{ openIds, toggleId, multiOpen }}>
            <div className="space-y-2">{children}</div>
        </AccordionGroupContext.Provider>
    );
};
