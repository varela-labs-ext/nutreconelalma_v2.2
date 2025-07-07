import clsx from "clsx";
import React, { useState } from "react";

interface TabItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    disabled?: boolean;
}

interface IconTabsProps {
    items: TabItem[];
    selectedId: string;
    onChange: (id: string) => void;
}

const IconTabs_old = ({ items, selectedId, onChange }: IconTabsProps) => {
    return (
        <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                {items.map((tab) => {
                    const isActive = tab.id === selectedId;
                    const isDisabled = tab.disabled;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => !isDisabled && onChange(tab.id)}
                            disabled={isDisabled}
                            className={clsx(
                                "group inline-flex items-center py-4 px-1 border-b-2 text-sm font-medium transition-colors",
                                {
                                    "cursor-not-allowed text-gray-300 border-transparent": isDisabled,
                                    "border-purple-500 text-purple-600": isActive && !isDisabled,
                                    "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300": !isActive && !isDisabled,
                                }
                            )}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default IconTabs_old;
