import { ReactNode } from "react";

export type PanelStatus = "none" | "ok" | "warning" | "error";

export type PanelTitle = {
    label: string;
    icon?: ReactNode;
    status?: PanelStatus;
};

type PanelTabSelectorProps = {
    titles: PanelTitle[];
    selectedIndex: number;
    onSelect: (index: number) => void;
};

const statusColorMap: Record<Exclude<PanelStatus, "none">, string> = {
    ok: "bg-green-500",
    warning: "bg-yellow-400",
    error: "bg-red-500",
};

const PanelTabSelector = (props: PanelTabSelectorProps) => {
    return (
        <div className="flex space-x-2">
            {props.titles.map((title, index) => {
                const isActive = props.selectedIndex === index;
                const statusColor =
                    title.status && title.status !== "none"
                        ? statusColorMap[title.status]
                        : null;

                return (
                    <button
                        key={index}
                        onClick={() => props.onSelect(index)}
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition
              ${isActive
                                ? "bg-purple-600 text-white border-purple-600"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                    >
                        {title.icon && <span className="text-base">{title.icon}</span>}
                        <span>{title.label}</span>

                        {statusColor && (
                            <span
                                className={`absolute -top-1 -right-1 h-2 w-2 rounded-full ${statusColor}`}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default PanelTabSelector;
