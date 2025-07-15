import PanelTabsSelector from "@/components/ui/tabs/PanelTabsSelector";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { Bot, FlaskConical } from "lucide-react";

interface MixingCenterSelectorProps {
    inCentralType: CentralTypeIdEnum;
    onChange: (inNewCentralType: CentralTypeIdEnum) => void;
}

const MixingCenterSelector = (props: MixingCenterSelectorProps) => {

    const handleOnTabChange = (inIndex: number) => {
        inIndex = (inIndex + 1);

        const newCentralType: CentralTypeIdEnum = inIndex as CentralTypeIdEnum;

        console.log(`NEW Central type: ${newCentralType}`);

        props.onChange(newCentralType);
    }

    const getCentralType = (): number => {
        const centralType: number = props.inCentralType;

        const value: number = (centralType - 1);

        return value;
    }

    return (
        <div className="text-sm font-medium">
            <PanelTabsSelector
                titles={[
                    { label: "Central de Mezclas Manual", icon: <FlaskConical />, status: "ok" },
                    { label: "Central de Mezclas Automatizada", icon: <Bot />, status: "ok" },
                    // { label: "Apex", icon: <Cpu />, status: "error" },
                ]}
                selectedIndex={getCentralType()}
                onSelect={handleOnTabChange}
            />
        </div>
    );
}

export default MixingCenterSelector;