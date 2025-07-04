import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import TabsResponsive from "../shared/TabsResponsive";

interface TabsBlockProps {
    tipoCentral: CentralTypeIdEnum;
    onChange: (value: CentralTypeIdEnum) => void;
    children: React.ReactNode;
}

const TabsBlock = (props: TabsBlockProps) => {
    const generarTitulos = (): string[] => {
        let titulos: string[] = [
            'Central de Mezclas Manual',
            'Central de Mezclas Automatizada',
            // 'Central de Mezclas Apex',
            // 'Central de Mezclas Nutriflex'
        ];

        return titulos;
    }

    const handleOnSelectedCentralChange = (index: number) => {
        const updateValue = Number(index);
        const output: CentralTypeIdEnum = updateValue as CentralTypeIdEnum;
        props.onChange(output);
    };

    return (
        <div className="w-full">
            <TabsResponsive
                titulos={generarTitulos()}
                selectedIndex={props.tipoCentral}
                onTabChange={handleOnSelectedCentralChange}
            />
            <div className="mt-4">
                {props.children}
            </div>
        </div>
    );
}

export default TabsBlock;
