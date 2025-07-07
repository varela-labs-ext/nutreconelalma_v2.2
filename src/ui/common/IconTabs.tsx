import {
    useState,
    useEffect,
    ReactElement,
    Children,
    isValidElement,
} from 'react';
import IconTab, { IconTabProps } from './IconTab';

type IconTabsProps = {
    children: ReactElement<IconTabProps>[];
    onTabChange?: (index: number) => void;
    defaultTabIndex?: number;
    activeTabIndex?: number; // ✅ NUEVO
    setActiveTabIndex?: (index: number) => void; // ✅ NUEVO
};

const IconTabs = (props: IconTabsProps) => {
    const validTabs = Children.toArray(props.children).filter(
        (child) => isValidElement(child) && child.type === IconTab
    ) as ReactElement<IconTabProps>[];

    // ✅ Si es modo controlado, usamos el index externo; si no, usamos estado interno
    const isControlled = props.activeTabIndex !== undefined && props.setActiveTabIndex !== undefined;

    const [internalIndex, setInternalIndex] = useState(() => {
        if (
            props.defaultTabIndex !== undefined &&
            props.defaultTabIndex >= 0 &&
            props.defaultTabIndex < validTabs.length
        ) {
            return props.defaultTabIndex;
        }
        return 0;
    });

    const activeIndex = isControlled ? props.activeTabIndex! : internalIndex;
    const setActiveIndex = isControlled ? props.setActiveTabIndex! : setInternalIndex;

    const activeTab = validTabs[activeIndex];

    useEffect(() => {
        if (props.onTabChange) {
            props.onTabChange(activeIndex);
        }
    }, [activeIndex]);

    return (
        <div>
            <div className="flex border-b border-gray-300 mb-4">
                {validTabs.map((tab, index) => {
                    const Icon = tab.props.icon;
                    const isActive = index === activeIndex;
                    const isDisabled = tab.props.disabled;

                    return (
                        <button
                            key={index}
                            onClick={() => {
                                if (!isDisabled) {
                                    setActiveIndex(index);
                                }
                            }}
                            disabled={isDisabled}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border-b-2
                  ${isActive
                                    ? 'text-purple-600 border-purple-600'
                                    : isDisabled
                                        ? 'text-gray-400 border-transparent cursor-not-allowed'
                                        : 'text-gray-500 border-transparent hover:text-purple-500'
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            {tab.props.label}
                        </button>
                    );
                })}
            </div>

            <div>{activeTab}</div>
        </div>
    );
};

export default IconTabs;
