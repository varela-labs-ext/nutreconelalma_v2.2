import React, { useState, useEffect } from "react";

interface PanelSelectorProps {
    titles: [string, string];
    defaultSelected?: string;
    onChange: (selected: string) => void;
}

const PanelSelectorSimple = ({
    titles,
    defaultSelected,
    onChange,
}: PanelSelectorProps) => {
    const [selected, setSelected] = useState<string>(defaultSelected ?? titles[0]);

    useEffect(() => {
        onChange(selected);
    }, [selected]);

    return (
        <div className="flex w-full space-x-4 border rounded-md p-1 bg-white shadow-sm">
            {titles.map((title) => (
                <button
                    key={title}
                    onClick={() => setSelected(title)}
                    className={`flex-1 py-2 px-4 text-center rounded-md text-sm font-medium transition-colors ${selected === title
                        ? "bg-purple-100 text-purple-700 border border-purple-400"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-transparent"
                        }`}
                >
                    {title}
                </button>
            ))}
        </div>
    );
};

export default PanelSelectorSimple;
