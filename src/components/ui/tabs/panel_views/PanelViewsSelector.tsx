import {
    Children,
    ReactElement,
    ChangeEvent,
    isValidElement,
    useState,
    useEffect,
} from "react";
import PanelView, { PanelViewProps, PanelStatus } from "./PanelView";

type PanelViewsSelectorProps = {
    children: ReactElement<PanelViewProps>[];
    defaultIndex?: number;
    activeIndex?: number;
    setActiveIndex?: (index: number) => void;
    onSelect?: (index: number) => void;
};

const statusColorMap: Record<Exclude<PanelStatus, "none">, string> = {
    ok: "bg-green-500",
    warning: "bg-yellow-400",
    error: "bg-red-500",
};

const PanelViewsSelector = (props: PanelViewsSelectorProps) => {
    const validTabs = Children.toArray(props.children).filter(
        (child) => isValidElement(child) && child.type === PanelView
    ) as ReactElement<PanelViewProps>[];

    const isControlled =
        props.activeIndex !== undefined && props.setActiveIndex !== undefined;

    const [internalIndex, setInternalIndex] = useState(() => {
        if (
            props.defaultIndex !== undefined &&
            props.defaultIndex >= 0 &&
            props.defaultIndex < validTabs.length
        ) {
            return props.defaultIndex;
        }
        return 0;
    });

    const activeIndex = isControlled ? props.activeIndex! : internalIndex;
    const setActiveIndex = isControlled
        ? props.setActiveIndex!
        : setInternalIndex;

    const activeTab = validTabs[activeIndex];

    useEffect(() => {
        if (props.onSelect) {
            props.onSelect(activeIndex);
        }
    }, [activeIndex]);

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setActiveIndex(Number(e.target.value));
    };

    return (
        <div className="space-y-4">
            {/* Modo móvil: select + ícono */}
            <div className="block sm:hidden">
                <select
                    value={activeIndex}
                    onChange={handleSelectChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
                >
                    {validTabs.map((tab, index) => (
                        <option key={index} value={index}>
                            {tab.props.label}
                        </option>
                    ))}
                </select>

                <div className="relative border-t border-gray-300 mt-4 pt-6 pb-4">
                    {activeTab.props.icon && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2">
                            <span className="text-gray-600">
                                {activeTab.props.icon}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Modo escritorio: tabs clásicos */}
            <div className="hidden sm:flex flex-col space-y-1 mt-4">
                <div className="pt-4 pb-4">
                    <div className="flex space-x-2 h-[44px] items-center">
                        {validTabs.map((tab, index) => {
                            const isActive = index === activeIndex;
                            const statusColor =
                                tab.props.status && tab.props.status !== "none"
                                    ? statusColorMap[tab.props.status]
                                    : null;

                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`relative flex items-center gap-2 px-4 py-2 h-full rounded-md border text-sm font-medium transition
                      ${isActive
                                            ? "bg-purple-500 text-white border-purple-600"
                                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-100"}`}
                                >
                                    {tab.props.icon && (
                                        <span className="text-base">
                                            {tab.props.icon}
                                        </span>
                                    )}
                                    <span>{tab.props.label}</span>
                                    {statusColor && (
                                        <span
                                            className={`absolute -top-1 -right-1 h-2 w-2 rounded-full ${statusColor}`}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="relative border-t border-gray-300 pt-2 pb-4">
                    {activeTab.props.icon && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2">
                            <span className="text-gray-600">
                                {activeTab.props.icon}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Contenido del tab activo */}
            <div>{activeTab}</div>
        </div>
    );
};

export default PanelViewsSelector;
