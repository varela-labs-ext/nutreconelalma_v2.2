interface TabsResponsiveProps {
    titulos: string[];
    selectedIndex: number;
    onTabChange: (index: number) => void;
}

const TabsResponsive = (props: TabsResponsiveProps) => {
    const handleItemChange = (index: number) => {
        props.onTabChange(index);
    };

    const desktopButtonClass = (index: number): string => {
        return (
            'px-4 py-2 rounded transition ' +
            (props.selectedIndex === index
                ? 'bg-purple-500 text-white '
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 ')
        );
    };

    return (
        <div className="w-full">
            {/* Select en mobile */}
            <div className="block sm:hidden mb-4">
                <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={props.selectedIndex}
                    onChange={(e) => handleItemChange(Number(e.target.value))}
                >
                    {props.titulos.map((titulo, index) => (
                        <option key={index} value={index}>
                            {titulo}
                        </option>
                    ))}
                </select>
            </div>

            {/* Tabs en desktop */}
            <div className="hidden sm:flex mb-4 flex-wrap gap-2">
                {props.titulos.map((titulo, index) => (
                    <button
                        key={index}
                        onClick={() => handleItemChange(index)}
                        className={desktopButtonClass(index)}
                    >
                        {titulo}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TabsResponsive;
