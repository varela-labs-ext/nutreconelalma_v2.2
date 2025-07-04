import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import TabsResponsive from "../shared/TabsResponsive";

interface TabsBlockProps {
    inCentralType: CentralTypeIdEnum;
    onChange: (inNewCentralType: CentralTypeIdEnum) => void;
    children: React.ReactNode;
}

const TabsBlock = (props: TabsBlockProps) => {
    const buildTitles = (): string[] => {
        let titulos: string[] = [
            'Central de Mezclas Manual',
            'Central de Mezclas Automatizada',
            // 'Central de Mezclas Apex',
            // 'Central de Mezclas Nutriflex'
        ];

        return titulos;
    }

    const handleOnSelectedChange = (index: number) => {
        const updateValue = Number(index);
        const output: CentralTypeIdEnum = updateValue as CentralTypeIdEnum;
        props.onChange(output);
    };

    return (
        <div className="w-full">
            <TabsResponsive
                titulos={buildTitles()}
                selectedIndex={props.inCentralType}
                onTabChange={handleOnSelectedChange}
            />
            <div className="mt-4">
                {props.children}
            </div>
        </div>
    );
}

export default TabsBlock;
